<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public function signup(Request $request)
    {

        $credentials = $request->validate([
            'name' => ['required', 'string', 'max:300'],
            'email' => ['required', 'email', 'max:300', 'unique:users,email'],
            'password' => ['required', 'min:8', 'max:300', 'confirmed'],
        ]);

        $user = User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => Hash::make($credentials['password']),
        ]);

        Auth::login($user);

        return redirect()->intended(route('home'));
    }

    public function updatePassword(Request $request)
    {
        /*  dd($request->all()); */

        $credentials = $request->validate([
            'old_password' => ['required', 'string', 'max:300'],
            'new_password' => ['required', 'min:8', 'max:300', 'confirmed'],
        ]);

        $user = Auth::user();

        if (!Hash::check($credentials['old_password'], $user->password)) {
            return back()->withErrors(['old_password' => 'The old password is incorrect.'])->onlyInput('old_password');;
        }

        $user->update([
            'password' => Hash::make($credentials['new_password']),
        ]);

        return back()->with('message', [
            'id' => uniqid(),
            'text' => 'Password changed successfully!',
        ]);
    }

    public function authenticate(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email', 'max:300'],
            'password' => ['required', 'max:300'],
        ]);


        $remember = $request->boolean('remember');

        $ip = $request->ip();

        $throttleKey = 'login:' . $ip;

        if (RateLimiter::tooManyAttempts($throttleKey, 5)) {
            $seconds = RateLimiter::availableIn($throttleKey);
            throw ValidationException::withMessages([
                'email' => "Too many login attempts. Repeat in $seconds seconds.",
            ]);
        }

        if (Auth::attempt($credentials, $remember)) {
            $request->session()->regenerate();

            RateLimiter::clear($throttleKey);

            return redirect()->intended(route('home'))->with('message', [
                'id' => uniqid(),
                'text' => 'Successfully logged in!',
            ]);
        }

        RateLimiter::hit($throttleKey, 30);

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function passwordResetEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status === Password::ResetLinkSent
            ? back()->with(['message' => __($status)])
            : back()->withErrors(['email' => __($status)]);
    }

    public function resetPasswordPage(Request $request): Response
    {
        return Inertia::render('auth/ResetPassword', [
            'email' => $request->email,
            'token' => $request->route('token'),
        ]);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        return $status === Password::PasswordReset
            ? redirect()->route('login')->with('status', __($status))
            : back()->withErrors(['email' => [__($status)]]);
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login');
    }

    public function demoLogin()
    {
        $key = 'demo-login:' . request()->ip();

        if (RateLimiter::tooManyAttempts($key, 10)) {
            abort(429, 'Too many demo logins. Please try again later.');
        }

        RateLimiter::hit($key, 60);

        $user = User::where('email', 'admin@gmail.com')->firstOrFail();
        Auth::login($user);
        return redirect()->route('home')->with('message', [
            'id' => uniqid(),
            'text' => 'Successfully logged in!',
        ]);
    }
}

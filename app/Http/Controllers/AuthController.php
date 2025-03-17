<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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

        return back()->with('message', 'Password changed successfully!');
    }

    public function authenticate(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email', 'max:300'],
            'password' => ['required', 'max:300'],
        ]);


        $remember = $request->boolean('remember');

        if (Auth::attempt($credentials, $remember)) {
            $request->session()->regenerate();

            return redirect()->intended(route('home'));
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login');
    }
}

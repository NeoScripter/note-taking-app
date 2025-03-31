<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NoteController;
use App\Models\Tag;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

Route::middleware(['auth'])->group(function () {
    Route::get('/', [NoteController::class, 'index'])->name('home');

    Route::get('/archive', [NoteController::class, 'archive'])->name('archive');

    Route::get('/search', [NoteController::class, 'search'])->name('search');

    Route::get('/settings', function (Request $request) {

        $user = $request->user();

        if ($user) {
            $user->loadMissing('tags');
        }

        $tags = $user ? $user->tags->pluck('name')->sort()->values() : [];

        return Inertia::render('user/Settings', [
            'tags' => $tags,
        ]);

    })->name('settings');

    Route::get('/tag/{tag}', [NoteController::class, 'tag'])->name('tag');

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::post('/update-password', [AuthController::class, 'updatePassword'])->name('update-password');

    Route::post('/note', [NoteController::class, 'store'])->name('notes.store');

    Route::delete('/notes/{note}', [NoteController::class, 'destroy'])->name('notes.destroy');

    Route::post('/notes-archive/{note}', [NoteController::class, 'archiveNote'])->name('notes.archive');

    Route::post('/notes-restore/{note}', [NoteController::class, 'restoreNote'])->name('notes.restore');

    Route::post('/notes/{note}', [NoteController::class, 'update'])->name('notes.update');

});

Route::get('/locale/{locale}', function ($locale) {
    Session::put('locale', $locale);
    App::setLocale($locale);

    return Inertia::location(URL::previous());
})->name('locale');



Route::get('/login', function () {
    return Inertia::render('auth/Login');
})->name('login');

Route::post('/signup', [AuthController::class, 'signup'])->name('signup.post');

Route::post('/login', [AuthController::class, 'authenticate']);

Route::get('/signup', function () {
    return Inertia::render('auth/Signup');
})->name('signup');

Route::get('/forgot-password', function () {
    return Inertia::render('auth/ForgotPassword');
})->name('forgot-password');

Route::post('/forgot-password', [AuthController::class, 'passwordResetEmail'])->name('password.email');

Route::get('/reset-password/{token}', [AuthController::class, 'resetPasswordPage'])->name('password.reset');

Route::post('/reset-password', [AuthController::class, 'resetPassword'])->name('password.store');

Route::post('/login/demo', [AuthController::class, 'demoLogin'])->name('login.demo');


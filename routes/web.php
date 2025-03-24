<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth'])->group(function () {
    Route::get('/', [NoteController::class, 'index'])->name('home');

    Route::get('/archive', [NoteController::class, 'archive'])->name('archive');

    Route::get('/search', function () {
        return Inertia::render('user/Search', [
            'user' => Auth::user(),
        ]);
    })->name('search');

    Route::get('/settings', function () {
        return Inertia::render('user/Settings');
    })->name('settings');

    Route::get('/tag/{tag}', [NoteController::class, 'tag'])->name('tag');

    Route::post('/update-font', [UserController::class, 'updateFont'])->name('update-font');

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::post('/update-password', [AuthController::class, 'updatePassword'])->name('update-password');
});



Route::get('/login', function () {
    return Inertia::render('auth/Login');
})->name('login');

Route::post('/signup', [AuthController::class, 'signup'])->name('signup');

Route::post('/login', [AuthController::class, 'authenticate']);

Route::get('/signup', function () {
    return Inertia::render('auth/Signup');
})->name('signup');

Route::get('/password-reset', function () {
    return Inertia::render('auth/ResetPassword');
})->name('password-reset');

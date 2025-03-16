<?php

use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('user/Dashboard', [
            'user' => Auth::user(),
        ]);
    })->name('home');

    Route::get('/archive', function () {
        return Inertia::render('user/Archive', [
            'user' => Auth::user(),
        ]);
    })->name('archive');

    Route::get('/search', function () {
        return Inertia::render('user/Search', [
            'user' => Auth::user(),
        ]);
    })->name('search');

    Route::get('/settings', function () {
        return Inertia::render('user/Settings', [
            'user' => Auth::user(),
        ]);
    })->name('settings');

    Route::get('/tag', function () {
        return Inertia::render('user/Dashboard', [
            'user' => Auth::user(),
        ]);
    })->name('tag');

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
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

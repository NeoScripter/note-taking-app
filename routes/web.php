<?php

use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('user/Dashboard', [
        'user' => Auth::user(),
    ]);
})->middleware('auth')->name('home');

Route::get('/login', function () {
    return Inertia::render('auth/Login');
})->name('login');

Route::post('/signup', [AuthController::class, 'signup'])->name('signup');

Route::post('/login', [AuthController::class, 'authenticate']);

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/signup', function () {
    return Inertia::render('auth/Signup');
})->name('signup');

Route::get('/password-reset', function () {
    return Inertia::render('auth/ResetPassword');
})->name('password-reset');

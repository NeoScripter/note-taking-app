<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('user/Dashboard');
})->middleware('auth')->name('home');

Route::get('/login', function () {
    return Inertia::render('auth/Login');
})->name('login');

Route::post('/login', [LoginController::class, 'authenticate']);

Route::get('/signup', function () {
    return Inertia::render('auth/Signup');
})->name('signup');

Route::get('/password-reset', function () {
    return Inertia::render('auth/ResetPassword');
})->name('password-reset');

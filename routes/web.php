<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('user/Dashboard');
})->middleware('auth')->name('home');

Route::get('/login', function () {
    return Inertia::render('auth/Login');
})->name('login');

Route::get('/password-reset', function () {
    return Inertia::render('auth/ResetPassword');
})->name('password-reset');

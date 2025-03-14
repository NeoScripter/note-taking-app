<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('app');
})->middleware('auth')->name('home');

Route::get('/login', function () {
    return Inertia::render('login');
})->name('login');

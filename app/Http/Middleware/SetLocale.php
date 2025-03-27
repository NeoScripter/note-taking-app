<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\App;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        if ($locale = Session::get('locale')) {
            App::setLocale($locale);
        } else if (!Session::has('locale')) {
            $browserLocale = substr($request->server('HTTP_ACCEPT_LANGUAGE'), 0, 2);

            $supportedLocales = ['en', 'fr', 'ru'];
            $locale = in_array($browserLocale, $supportedLocales) ? $browserLocale : config('app.locale');
            Session::put('locale', $locale);
            App::setLocale($locale);
        }

        return $next($request);
    }
}

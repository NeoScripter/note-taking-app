<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark', 'overflow-x-clip' => true])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-inter antialiased overflow-x-clip text-dark-black bg-colors theme-colors dark:text-white selection:bg-black-pale selection:text-white dark:selection:bg-gray-neutral dark:selection:text-black">
        @inertia
    </body>
</html>

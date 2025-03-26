<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class([
    'dark' => ($appearance ?? 'system') == 'dark',
    'overflow-x-clip' => true,
])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="author" content="Ilya Andreev">

    <!-- Description -->
    <meta name="description"
        content="Capture ideas, organize your thoughts, and manage tasks effortlessly with Noteflow — a modern note-taking app designed for productivity and simplicity.">

    <!-- Keywords -->
    <meta name="keywords"
        content="note-taking app, digital notebook, productivity tool, task management, personal notes, organized writing, idea capture, markdown notes, fast note app, distraction-free writing">

    <!-- Robots -->
    <meta name="robots" content="index, follow">

    <!-- Open Graph (OG) -->
    <meta property="og:title" content="Noteflow — Effortless Note-Taking for Your Ideas">
    <meta property="og:description"
        content="Organize your thoughts, tasks, and plans with Noteflow — a sleek and intuitive note-taking app designed for creators, students, and professionals.">

    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:image" content="{{ asset('images/meta/og.png') }}">
    <meta property="og:site_name" content="Noteflow — Note-Taking App">
    <meta property="og:locale" content="en_US">

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="Noteflow — Note-Taking App">
    <meta name="mobile-web-app-capable" content="yes">

    <!-- Favicon and Icons -->
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/meta/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/meta/favicon-16x16.png') }}">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">

    <title inertia>{{ config('app.name', 'Note Flow') }}</title>

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body
    class="font-inter text-dark-black bg-colors theme-colors selection:bg-black-pale dark:selection:bg-gray-neutral overflow-x-clip antialiased selection:text-white dark:text-white dark:selection:text-black">
    @inertia
</body>

</html>

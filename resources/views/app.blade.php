<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead

<style>
  #splash-screen {
    position: fixed;
    inset: 0;
    background: white;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    transition: opacity 0.6s ease, transform 0.6s ease;
    opacity: 0;
    transform: scale(1.05);
  }

  #splash-screen.visible {
    display: flex;
    opacity: 1;
    transition-duration: 1.6s ;
    transition-timing-function: ease-in-out;
    transform: scale(1);
  }

    #splash-screen.hidden {
    display: flex;
    opacity: 0;
    transition-duration: 1.6s ;
    transition-timing-function: ease-in-out;
    transform: scale(1);
  }

  #splash-screen.fade-out {
    opacity: 0;
    transform: scale(0.98);
    pointer-events: none;
  }

  .splash-content {
    text-align: center;
    animation: fadeInUp 0.6s ease both;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

    </head>
    <body class="font-sans antialiased">
<div id="splash-screen" class="hidden">
  <div class="splash-content">
    <h1 style="font-size: 2rem;"><img class="w-full h-full" src="logo_dark.png"/></h1>
  </div>
</div>
        @inertia
        <script>
  // Check before React/Inertia loads
  const seen = localStorage.getItem('hasSeenSplash');
  const splash = document.getElementById('splash-screen');
  if (!seen && splash) {
    splash.classList.remove('hidden');
    splash.classList.add('visible');
  }
</script>

    </body>
</html>

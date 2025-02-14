<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @vite('resources/css/app.css')
  </head>
  <body>
    <x-header />
    <main class="max-w-[1200px] mx-auto px-6 py-12">
        <div class="text-center mb-16">
            <h1 class="text-[32px] font-didot font-bold mb-3">Sign Up for <em class="italic font-didot">Vanity Fair</em>'s Newsletters</h1>
            <p class="text-lg">Preview and select the newsletters you'd like to receive below.</p>
        </div>

        <hr class="mt-5 mb-5">

        <section class="max-w-5xl mx-auto">
            <h2 class="text-sm font-bold tracking-[0.2em] mb-8 text-black">VF DIGESTS</h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <x-component1 />
                <x-component1 />
                <x-component1 />
                <x-component1 />
            </div>
        </section>

            <hr class="mt-5 mb-5">

            <h2 class="text-sm font-bold tracking-[0.2em] mb-8 text-black">VF Voices</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <x-component1 />
                <x-component1 />
                <x-component1 />
                <x-component1 />
            </div>

    </main>
    <x-footer />
  </body>
</html>
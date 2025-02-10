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
        <!-- Header -->
        <div class="text-center mb-16">
            <img src="/api/placeholder/140/40" alt="Vanity Fair Logo" class="mx-auto mb-12">
            <h1 class="text-[32px] font-didot mb-3">Sign Up for <em class="italic font-didot">Vanity Fair</em>'s Newsletters</h1>
            <p class="text-gray-600 text-lg">Preview and select the newsletters you'd like to receive below.</p>
        </div>

        <!-- Newsletter Section -->
        <section class="max-w-5xl mx-auto">
            <h2 class="text-sm font-bold tracking-[0.2em] mb-8 text-black">VF DIGESTS</h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Cocktail Hour -->
                <div class="border border-gray-200 rounded-none p-6 relative bg-white hover:shadow-lg transition-shadow">
                    <button class="absolute top-4 right-4 w-8 h-8 rounded-full border border-red-500 text-red-500 flex items-center justify-center text-xl font-light hover:bg-red-500 hover:text-white transition-colors">+</button>
                    <div class="mb-4">
                        <img src="{{Vite::asset('resources/images/cocktail.jpeg') }}" alt="Cocktail Hour Icon" class="rounded-full w-16">
                    </div>
                    <h3 class="text-[22px] font-didot mb-2">Cocktail Hour</h3>
                    <p class="text-gray-600 mb-4 text-base leading-relaxed">Our essential daily brief on culture, news, and style.</p>
                    <div class="flex items-center text-sm">
                        <span class="text-gray-500 mr-6">Daily</span>
                        <a href="#" class="text-red-500 hover:text-red-600 transition-colors">Preview</a>
                    </div>
                </div>

                <!-- Hollywood Daily -->
                <div class="border border-gray-200 rounded-none p-8 relative bg-white hover:shadow-lg transition-shadow">
                    <button class="absolute top-6 right-6 w-8 h-8 rounded-full border border-red-500 text-red-500 flex items-center justify-center text-xl font-light hover:bg-red-500 hover:text-white transition-colors">+</button>
                    <div class="mb-6">
                        <img src="{{Vite::asset('resources/images/cocktail.jpeg') }}" alt="Hollywood Daily Icon" class="rounded-full">
                    </div>
                    <h3 class="text-[22px] font-didot mb-3">Hollywood Daily</h3>
                    <p class="text-gray-600 mb-6 text-base leading-relaxed">Film, TV, and entertainment industry news. Plus, every Friday, a special Awards Insider edition.</p>
                    <div class="flex items-center text-sm">
                        <span class="text-gray-500 mr-6">Daily</span>
                        <a href="#" class="text-red-500 hover:text-red-600 transition-colors">Preview</a>
                    </div>
                </div>

                <!-- Hive -->
                <div class="border border-gray-200 rounded-none p-8 relative bg-white hover:shadow-lg transition-shadow">
                    <button class="absolute top-6 right-6 w-8 h-8 rounded-full border border-red-500 text-red-500 flex items-center justify-center text-xl font-light hover:bg-red-500 hover:text-white transition-colors">+</button>
                    <div class="mb-6">
                        <img src="{{Vite::asset('resources/images/cocktail.jpeg') }}" alt="Hive Icon" class="rounded-full">
                    </div>
                    <h3 class="text-[22px] font-didot mb-3">Hive</h3>
                    <p class="text-gray-600 mb-6 text-base leading-relaxed">Where Wall Street, Washington, and Silicon Valley meet.</p>
                    <div class="flex items-center text-sm">
                        <span class="text-gray-500 mr-6">Daily</span>
                        <a href="#" class="text-red-500 hover:text-red-600 transition-colors">Preview</a>
                    </div>
                </div>

                <!-- Royal Watch -->
                <div class="border border-gray-200 rounded-none p-8 relative bg-white hover:shadow-lg transition-shadow">
                    <button class="absolute top-6 right-6 w-8 h-8 rounded-full border border-red-500 text-red-500 flex items-center justify-center text-xl font-light hover:bg-red-500 hover:text-white transition-colors">+</button>
                    <div class="mb-6">
                        <img src="{{Vite::asset('resources/images/cocktail.jpeg') }}" alt="Royal Watch Icon" class="rounded-full">
                    </div>
                    <h3 class="text-[22px] font-didot mb-3">Royal Watch</h3>
                    <p class="text-gray-600 mb-6 text-base leading-relaxed">An overview of the chatter from Kensington Palace and beyond.</p>
                    <div class="flex items-center text-sm">
                        <span class="text-gray-500 mr-6">Tues & Thurs</span>
                        <a href="#" class="text-red-500 hover:text-red-600 transition-colors">Preview</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <x-footer />
  </body>
</html>
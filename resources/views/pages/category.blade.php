<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    @vite('resources/css/app.css')
  </head>
  <body>
    <x-header />

    <section class="bg-white md:mt-20">
      <div class="flex flex-col items-center justify-center text-center py-10">
          <hr class="w-52 border-t-2 border-gray-900 my-2">
          <h2 class="text-5xl md:text-[100px] font-serif font-bold tracking-wider">H I V E</h2>
          <hr class="w-52 border-t-2 border-gray-900 my-2">
          <div class="flex space-x-6 mt-20  font-semibold">
              <a href="#" class="hover:text-black text-xs">BUSINESS</a>
              <a href="#" class="text-red-600 border-b-2 border-red-600 text-xs">POLITICS</a>
              <a href="#" class="hover:text-black text-xs">TECHNOLOGY</a>
          </div>
      </div>


      <section>
        <div class="mt-12 md:m-20">
          <img src="{{Vite::asset('resources/images/VF0225_Harry-and-Meghan_Cover-Image-Social-Crop_1.png') }}" alt="Article hero image" class="w-full h-auto object-cover" />
        </div>

        <div class="text-center mt-10 md:mt-[-60px]">
          <div class="text-red-500 uppercase text-sm font-semibold">
            Trump Administration
          </div>
          <h2 class="text-3xl font-bold mt-2">
            Why Is Elon Musk So Hell-Bent on Bulldozing the Government?
          </h2>
          <p class="mt-4 max-w-6xl mx-auto text-lg">
            Silicon Valley insiders tell Vanity Fair what they think is behind the mega-billionaire's DOGE crusade. “Elon believes he should be emperor of the world,” one close associate says.
          </p>
          
          <p class="text-sm mt-4">BY NICK BILTON</p>
          <p class="text-gray-600 text-sm mt-4">February 21 2025</p>
        </div>
      </section>

      <div class="max-w-screen-lg mt-28 md:ml-10 px-6">
        <!-- First Article -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pb-12 border-b border-gray-200">
          <!-- Image -->
          <div class="col-span-1 flex justify-center">
            <img
              src="{{Vite::asset('resources/images/VF0225_Harry-and-Meghan_Cover-Image-Social-Crop_1.png') }}"
              alt="Elon Musk"
              class="w-full max-w-sm rounded"
            />
          </div>
          <!-- Text -->
          <div class="lg:col-span-2 md:mt-10">
            <div class="text-red-500 text-sm uppercase font-semibold tracking-wide mb-2">
              Trump Administration
            </div>
            <h2 class="text-2xl font-bold leading-snug mb-4">
              Why Is Elon Musk So Hell-Bent on Bulldozing the Government?
            </h2>
            <p class="text-gray-700 text-base leading-relaxed max-w-3xl mb-4">
              Silicon Valley insiders tell Vanity Fair what they think is behind the mega-billionaire's DOGE crusade. “Elon believes he should be emperor of the world,” one close associate says.
            </p>
            <p class="text-sm text-gray-500 font-medium">BY NICK BILTON</p>
          </div>
        </div>
    
        <!-- Second Article -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pt-12">
          <!-- Image -->
          <div class="col-span-1 flex justify-center">
            <img
              src="{{Vite::asset('resources/images/VF0225_Harry-and-Meghan_Cover-Image-Social-Crop_1.png') }}"
              alt="Donald Trump"
              class="w-full max-w-sm rounded grayscale"
            />
          </div>
          <!-- Text -->
          <div class="lg:col-span-2">
            <div class="text-red-500 text-sm uppercase font-semibold tracking-wide mb-2">
              Power and the Press
            </div>
            <h2 class="text-2xl font-bold leading-snug mb-4">
              Media Giants Settling With Donald Trump Are Setting a “Dangerous” Precedent
            </h2>
            <p class="text-gray-700 text-base leading-relaxed max-w-3xl mb-4">
              Disney and Meta have already shelled out $40 million to the president since Election Day, with Paramount in talks to settle Trump’s <i>60 Minutes</i> suit. It’s a “concerning shift,” says one legal expert, from news outlets historically battling in court over the First Amendment.
            </p>
            <p class="text-sm text-gray-500 font-medium">BY PAUL FARHI</p>
          </div>
        </div>
        
      </div>

      <div class="flex justify-center mt-20 mb-10">
        <button class="bg-red-700 text-white px-6 py-2 text-lg font-semibold hover:bg-red-600 transition duration-200">
          Next Page
        </button>
      </div>
      
    </section>

    <x-footer />
  </body>
</html>
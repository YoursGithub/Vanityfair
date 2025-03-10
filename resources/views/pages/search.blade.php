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

    <div class="text-center mt-[100px]">
        <h2 class="text-2xl md:text-4xl font-serif font-bold mb-20">Search stories from Vanity Fair</h2>
      </div>
      <hr class="mt-5">
    <section class="container mx-auto px-4">

      <div class="flex justify-center mt-8 md:mt-7">
            <form class="flex flex-col sm:flex-row items-center w-full  max-w-xl px-4 space-y-4 sm:space-y-0">

                <input
                  type="text"
                  placeholder="Try &quot;Racial Justice&quot;"
                  class="w-full px-4 py-[9px] border border-gray-300 focus:outline-none"
                  name="search"
                  value="{{ $search }}"
              />
              <button class="w-full sm:w-auto bg-black text-white px-10 py-[14px] font-semibold hover:bg-gray-800 transition">
                  <p class="text-xs">SEARCH</p>
              </button>

            </form>
              
      </div>

      
      <div class="flex flex-col sm:flex-row  mt-8 max-w-4xl mx-auto px-4">
          <div class="mb-4 sm:mb-0 hidden md:block ">
              <p class="text-sm md:ml-[-200px] font-semibold uppercase">
                  
                {{ $number }} Results from Vanity Fair
              </p>
          </div>

          {{-- <div class="flex items-center space-x-2 md:ml-[470px] md:mt-[-10px]">
              <label for="sort" class="text-sm font-medium">SORT BY</label>
              <select
                  id="sort"
                  class="border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                  <option>Relevance</option>
                  <option>Newest</option>
                  <option>Oldest</option>
              </select>
          </div> --}}

          <div class="mb-4 mt-5 sm:mb-0 md:hidden">
            <p class="text-sm md:ml-[-200px] font-semibold uppercase">
                {{ $number }} Results from Vanity Fair
            </p>
        </div>
      </div>
  </section>

  <hr class="mt-5">


    <main class="container px-4 py-8">
      <div class="max-w-4xl md:ml-20 mt-10 space-y-12">

        @foreach ($posts as $post)
        @php

            $url = route('blog', ['slug' => $post->slug]);
            $title = Str::title($post->title);

            $image = $post->thumbnail;
            $description = $post->description;

            $date = $post->created_at->format('F d, Y ');
            $author = $post->author?->name;
            $cat = $post->category->category;
            $catUrl = route('category', ['category' => $cat]);

        @endphp


        <a href="{{ $url }}">

          <article class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-200">
              <div class="md:col-span-5">
                  <img src="{{ $image }}" alt="Article image" class="w-full h-full object-cover aspect-square"/>
              </div>
              <div class="md:col-span-7 space-y-3">
                  <div class="text-red-600 text-sm font-medium tracking-wider uppercase">{{ $cat }}</div>
                  <h2 class="text-3xl font-serif leading-tight">{{ $title }}</h2>
                  <p class="text-gray-700">
                    {{ $description }}
                  </p>
                  <div class="text-sm text-gray-500">
                      BY <span class="font-medium">{{ $author }}</span>
                  </div>
                  <div class="text-sm text-gray-500">{{ $date }}</div>
              </div>
          </article>

        </a>

        @endforeach

      </div>
  </main>
  </body>
</html>
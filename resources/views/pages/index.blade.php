<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    @vite('resources/css/app.css')
  </head>

  <style>
    .tinos-regular {
  font-family: "Tinos", serif;
  font-weight: 400;
  font-style: normal;
}

.tinos-semibold {
  font-family: "Tinos", serif;
  font-weight: 600;
  font-style: normal;
}


.tinos-bold {
  font-family: "Tinos", serif;
  font-weight: 700;
  font-style: normal;
}

.tinos-regular-italic {
  font-family: "Tinos", serif;
  font-weight: 400;
  font-style: italic;
}

.tinos-bold-italic {
  font-family: "Tinos", serif;
  font-weight: 700;
  font-style: italic;
}

  </style>
  <body class="">
   

    <x-header />


    <main class=" md:mt-[60px]">
      <div class="max-w-7xl 2xl:max-w-screen xl:ml-20 xl:mr-20 2xl:ml-20 2xl:mr-20 mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div class="md:col-span-3 mt-5">
            @foreach ($recentPosts->slice(0,3) as $post)
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
              <article class="mb-10">
                  <div class="mb-4">
                      <img src="{{ $image }}" alt="Prince Harry" class="w-full md:w-[320px] h-[250px] object-cover">
                  </div>
                  <div class="uppercase text-red-600 text-xs font-bold tracking-wider mb-2">{{ $cat }}</div>

                  <h2 class="font-serif text-xl leading-tight mb-2">
                    <a href="#" class="relative no-underline hover:no-underline">
                      <span class="bg-[linear-gradient(0deg,currentColor,currentColor)] bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-100 ease-in-out tinos-semibold">
                    {{ $title  }}
                      </span>
                    </a>
                  </h2>

                  <div class="text-sm text-gray-700">
                      BY <a href="#" class="uppercase">{{ $author }}</a>
                  </div>
              </article>
            </a>

            @endforeach
        
          </div>

          <div class="md:col-span-6 mt-5">

            @if ($firstPost)
              

            @php

                $post = $firstPost  ;

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
                <article class="">
                  <div class="mb-4 ">
                      <img src="{{ $image }}" alt="Jurassic World Scene" class="w-full h-[400px] object-cover">
                  </div>
                  <div class="uppercase text-red-600 text-xs font-bold tracking-wider mb-2">{{ $cat }}</div>
                  <h2 class="font-serif text-2xl leading-tight mb-2">
                      <a href="{{ $url }}" class="bg-[linear-gradient(0deg,currentColor,currentColor)] bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-100 ease-in-out md:text-3xl tinos-regular">{{ $title }}</a>
                  </h2>
                  <p class="font-sans">
                    {{ $description }}
                  </p>
                  <div class="text-sm mt-2 text-gray-700 mb-4 tinos-regular">
                    BY <a href="#" class="uppercase hover:text-red-600">{{ $author }}</a>
                  </div>
              </article>
              </a>

            @endif


            <hr class="border-gray-300 " />


            @foreach ($recentPosts->slice(3,2) as $post)
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
            <div class="mt-5">
              <article class="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div class="md:col-span-8 flex-col">
                  <div class="uppercase text-red-600 text-xs font-bold tracking-wider mb-2">{{ $cat }}</div>
                  <a href="{{ $url }}" class="font-serif text-xl mb-3">
                    <span class="bg-[linear-gradient(0deg,currentColor,currentColor)] bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ease-in-out inline cursor-pointer tinos-semibold">
                      {{ $title }}
                    </span>
                  </a>

                  <a href="{{ $url }}" class="text-sm font-sans">
                    {{ $description }}
                  </a>
                  <div class="text-sm mt-2 text-gray-700 mb-4">
                    BY <a href="#" class="uppercase hover:text-red-600">{{ $author }}</a>
                  </div>
                </div>
                <div class="md:col-span-4">
                  <a href="{{ $url }}">
                    <img src="{{ $image }}" alt="Prince" class="w-full md:h-[130px] h-[250px] object-cover">
                  </a>
                </div>
              </article>
              <hr class="border-gray-300" />
            </div>

            @endforeach

          </div>

          <div class="md:col-span-3 mt-5">
              <div class="border-t-2 border-black pt-4">
                  <h2 class="font-bold text-lg uppercase mb-6 text-center">Trending</h2>
                  
                  <div class="space-y-6">

                    @foreach ($recentPosts->slice(5,4) as $post)
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

                      <article>
                        <div class="uppercase text-red-600 text-xs font-bold tracking-wider">{{ $cat }}</div>
                          <h3 class="font-serif text-base leading-tight mb-2">
                              <a href="{{ $url }}" class="bg-[linear-gradient(0deg,currentColor,currentColor)] bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-100 ease-in-out tinos-semibold">
                                {{ $title }}
                              </a>
                          </h3>
                      </article>

                      <hr class="border-gray-300" />

                    @endforeach
                     
                  </div>
              </div>


              <div class="max-w-sm p-4 text-center">
                <div class="mb-2">
                  <span class="text-red-600 text-xs font-bold tracking-wider uppercase">The Archive</span>
                </div>
                
                @foreach ($recentPosts->slice(9,1) as $post)
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
                  <article class="group cursor-pointer">
                    <h3 class="text-xl font-serif bg-[linear-gradient(0deg,currentColor,currentColor)] bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-100 ease-in-out mb-2 tinos-semibold">{{ $title }}</h3>
                    <p class="text-sm">
                      {{ $description }}
                    </p>
                    
                    <div class="mt-4">
                      <img src="{{ $image }}" alt="Article thumbnail" class="w-full object-cover" />
                    </div>

                    <p class="text-red-600 text-sm font-bold mt-7">EXPLORE THE ARCHIVE</p>

                    <hr class="border-gray-300 mt-10" />

                  </article>
                </a>

                @endforeach
              </div>


          </div>
      </div>

      
      @foreach ($recentPosts->slice(10,1) as $post)

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

          <section class="relative w-full h-screen mt-20">
            <div class="absolute inset-0">
                <img src="{{ $image }}" alt="Prince Harry and Meghan Markle" class="w-full h-full object-cover ">
                <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
            </div>

            <a href="{{ $url }}">
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white w-full mx-auto">
              <div class="md:ml-10">
                <div class="mb-4">
                    <span class="uppercase text-xs font-bold tracking-wider">{{ $cat }}</span>
                </div>
                <h1 class="bg-[linear-gradient(0deg,currentColor,currentColor)] bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ease-in-out inline cursor-pointer font-serif text-5xl md:text-4xl leading-tight mb-1 tinos-semibold">
                 
                  {{ $title }}
                </h1>
            <p class="text-lg mt-1 md:text-xl mb-6 max-w-3xl">
                   {{ $description }}
                </p>
                <div class="text-xs mb-8">
                    BY <a href="#" class="uppercase hover:text-red-600">{{ $author }}</a>
                </div>
              </div>
            </div>
            </a>
          </section>

        @endforeach

<hr class="border-white w-1/4" />

<section class="max-w-9xl mx-auto px-6 md:px-16 py-8 bg-black">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-white ">

    @foreach ($recentPosts->slice(11,4) as $post)

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
      <article class="group cursor-pointer flex">
        <div>
          <div class="uppercase text-white text-xs font-bold tracking-wider mb-2">{{ $cat }}</div>
          <h2 class="font-serif text-xl leading-tight mb-2 bg-[linear-gradient(0deg,currentColor,currentColor)] bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ease-in-out inline cursor-pointer ">
            {{ $title }}
          </h2>
        </div>
          <div class="aspect-w-16 aspect-h-9 mt-4">
              <img src="{{ $image }}" alt="Miss Hall's" class="w-20 h-14 object-cover">
          </div>
      </article>
    </a>
    @endforeach

  </div>
</section>

<section class="max-w-7xl 2xl:max-w-screen xl:ml-20 xl:mr-20 2xl:ml-20 2xl:mr-20 mx-auto px-4 py-8">
  <h2 class="text-3xl font-bold uppercase mb-6 tinos-semibold">Featured Video</h2>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div class="lg:col-span-2 relative">
      <div class="relative aspect-video md:bg-gray-100 w-full">
        <video src="" autoplay loop muted playsinline class="w-full h-full object-cover"></video>
        <button class="absolute left-4 bottom-4 md:mb-16 mb-28 bg-black bg-opacity-75 text-white px-4 py-2 rounded-sm flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          </svg>
          WATCH
        </button>
        <div class="m-6">
        <h3 class="text-xl font-bold mt-4">Behind the Scenes: Making Movie Magic</h3>
        <p class="text-gray-600 mt-2">Go behind the scenes with our exclusive look at special effects and cinematography</p>
        </div>
      </div>
    </div>

    <div class="space-y-6">

      @foreach ($recentPosts->slice(15,2) as $post)

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
        <div class="group cursor-pointer">
          <div class="aspect-video bg-gray-100 w-full mb-3">
            <img src="{{ $image }}" alt="Video thumbnail 1" class="w-full h-full object-cover object-top" />
          </div>
          <h3 class="bg-[linear-gradient(0deg,currentColor,currentColor)] bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ease-in-out inline cursor-pointer text-lg font-semibold mt-2 tinos-semibold">{{ $title }}</h3>
        </div>
      </a>

      @endforeach

      


    </div>
  </div>
</section>


<section class="max-w-7xl 2xl:max-w-screen xl:ml-20 xl:mr-20 2xl:ml-20 2xl:mr-20 mx-auto px-4 py-8">
  <h2 class="text-xl font-semibold uppercase tinos-semibold">Highlights from the Grammy's</h2>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">

    @foreach ($stylePosts as $post)

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

                  <article class="group cursor-pointer flex">
                    <div>
                      <div class="uppercase text-red-600 text-xs font-bold tracking-wider mb-2">{{ $cat }}</div>
                      <h2 class="font-serif text-md leading-tight mb-2 bg-[linear-gradient(0deg,currentColor,currentColor)] bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ease-in-out inline cursor-pointer tinos-semibold">
                      {{ $title }}                          
                      </h2>
                    </div>
                      <div class="aspect-w-16 aspect-h-9 mt-4">
                          <img src="{{ $image }}" alt="Miss Hall's" class="w-20 h-14 object-cover">
                      </div>
                  </article>
            </a>

    @endforeach

    
  </div>
</section>


<x-the-hive :posts="$vanPosts" cat="vanity fair eksklusiv" />

<x-the-hive :posts="$hollPosts" cat="hollywood" />


<x-the-hive :posts="$politicsPosts" cat="politics" />




<section class="bg-gray-100">
  <div class="flex justify-center items-center min-h-screen">
      <div class="w-full max-w-3xl text-center p-6">
          <h1 class="text-3xl md:text-4xl font-serif font-bold">
              Our biggest stories, straight to your inbox.
          </h1>
          <p class="text-gray-700 mt-4 text-lg">
              Sign up now to get our essential daily brief on politics, entertainment, royals, and more.
              <a href="#" class="text-black font-semibold underline">See all newsletters »</a>
          </p>
          <div class="mt-6 flex flex-col sm:flex-row items-center justify-center">
              <input type="email" placeholder="Your e-mail address"
                  class="w-full sm:w-2/3 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700">
              <button class="w-full sm:w-auto mt-3 sm:mt-0 bg-black text-white font-semibold px-6 py-3  hover:bg-gray-800">
                  SIGN UP
              </button>
          </div>
          <p class="text-xs mt-4">
              By signing up you agree to our <a href="#" >User Agreement</a> and 
              <a href="#" >Privacy Policy & Cookie Statement</a>.
          </p>
      </div>
  </div>
</section>

<hr class="border-black border-2 w-3/4 xl:ml-10 2xl:ml-44 mt-10" />

<section class="max-w-7xl 2xl:max-w-screen xl:ml-20 xl:mr-20 2xl:ml-20 2xl:mr-20 mx-auto px-4 py-8">
  <h2 class="text-2xl font-bold uppercase mb-8 tracking-wider tinos-semibold">Celebrity</h2>


  @foreach ($celPosts->slice(0,1) as $post)

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


    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="relative">
        <a href="{{ $url }}" class="block">
          <img src="{{ $image }}" alt="Featured photograph" class="w-full h-[360px] object-cover" />
        </a>
      </div>

      <div class="flex flex-col justify-center text-center">
        <div class="space-y-4">
          <div class="uppercase text-red-600 font-semibold text-sm tracking-wider">{{ $cat }}</div>
          

          <h3 class="text-xl  font-serif leading-tight ">
            <a href="{{ $url }}" class="bg-[linear-gradient(0deg,currentColor,currentColor)] bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-100 ease-in-out tinos-semibold">
              {{ $title }}
            </h3>
          
          <p class="tinos-regular text-sm leading-relaxed mt-4">
            
            {{ $description }}
          </p>
          
          <div class=" text-xs space-y-1">
            <div class="uppercase">
              BY <a href="#" class="hover:text-red-600">{{ $author }}</a>
            </div>
            
            <div class="text-gray-500 uppercase">
              {{ $date }}
            </div>
          </div>
        </div>
      </div>
    </div>

  @endforeach
  
  


</section>



<x-footer />

  </main>
  </body>
</html>
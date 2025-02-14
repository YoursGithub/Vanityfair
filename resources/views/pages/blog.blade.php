<!doctype html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
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

<body>

    <x-header />

        @php

        $url = route('blog', ['slug' => $post->slug]);
        $title = Str::title($post->title);

        $image = $post->thumbnail;
        $description = $post->description;

        $date = $post->created_at->format('F d, Y ') ;
        $author = $post->author?->name;
        $cat = $post->category->category;
        $catUrl = route('category', ['category' => $cat]);
        
        @endphp

    <section>
        <article class="max-w-4xl mx-auto px-4 py-12">
            <div class="text-center mb-8 mt-10">
                <span class="text-red-600 font-semibold tracking-wider text-sm">
                  <a href="{{ $catUrl }}">
                  
                  {{ Str::upper($cat) }}
                </a>
                </span>
            </div>

            <h1
                class="text-center tinos-regular font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 max-w-3xl mx-auto">
                {{ $title }}
            </h1>

            <div class="text-center tinos-regular text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                {{ $description }}
            </div>

            <div class="text-center space-y-2 text-sm uppercase tracking-wider">
                <div class="space-x-1">
                    <span>BY</span>
                    <a href="#" class="text-red-600 hover:text-red-700">{{ $author }}</a>
                </div>

               

                <div class="text-gray-500 mt-4">
                    {{ $date }}
                </div>
            </div>

            <div class="mt-12">
                <img src="{{ $image }}"
                    alt="Article hero image" class="w-full h-auto" />
            </div>
        </article>



        <article class="max-w-4xl mx-auto px-4">
            <div class="mb-12">
                <h2 class="text-sm font-medium mb-4">{{ $post->image_caption }}</h2>
                {{-- <div class="w-full bg-gray-100 rounded p-4">
                    <div class="flex items-center justify-between gap-4">
                        <span class="text-xs text-gray-500">00:00</span>
                        <div class="flex-1 h-1 bg-gray-300 rounded">
                            <div class="w-0 h-full bg-black rounded"></div>
                        </div>
                        <span class="text-xs text-gray-500">07:05</span>
                    </div>
                    <div class="flex justify-center mt-4">
                        <button class="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                </div> --}}
            </div>

            <div class="float-left mr-4">
                <button class="p-4 hover:bg-gray-100 rounded-sm">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </button>
            </div>

            <div class="font-serif text-lg leading-relaxed tinos-regular">
                {!! $post->blog !!}
            </div>
        </article>
    </section>

    <section>
        <div class="flex justify-center items-center min-h-screen">
            <div class="w-full max-w-3xl  p-6">
                <h1 class="text-3xl text-center md:text-4xl font-serif font-bold">
                    Hollywood Daily
                </h1>
                <p class="mt-4 text-lg text-center">
                    Film, TV, and entertainment industry news. Plus, every Friday, a special Awards Insider edition.
                </p>
                <div class="mt-6 flex flex-col sm:flex-row items-center justify-center">
                    <input type="email" placeholder=""
                        class="w-full sm:w-3/4 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700">
                    <button
                        class="w-full sm:w-auto mt-3 sm:mt-0 bg-black text-white font-semibold px-6 py-3  hover:bg-gray-800">
                        SIGN UP
                    </button>
                </div>
                <p class="text-gray-500 text-xs mt-4">
                    By signing up, you agree to our <span class="text-red-600">user agreement</span> (<span
                        class="text-red-600">including class action waiver and arbitration provisions</span>), and
                    acknowledge our <span class="text-red-600">privacy policy.</span>
                </p>
            </div>
        </div>
    </section>


    <section>
        <div class="container mx-auto px-4 py-8">
            <hr class="border-black border-2 w-full mt-10" />
            <h2 class="text-center font-bold text-2xl mb-6 mt-3">Read More</h2>
            <hr class="border-gray-300 border-2 w-full mb-10" />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              @foreach ( $relatedPosts as $post )
                
              <x-blog-card :post="$post"/>

              @endforeach

          

            </div>
        </div>
    </section>

    <x-footer />
</body>

</html>

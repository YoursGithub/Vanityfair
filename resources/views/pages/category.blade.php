<!doctype html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <title>{{ Str::title($category)}} Vanity Fair</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
    @vite('resources/css/app.css')
    @include('pages.layouts.seo')
</head>

<body>
    <x-header />

    <section class="bg-white md:mt-20">
        <div class="flex flex-col items-center justify-center text-center py-10">
            {{-- <hr class="w-52 border-t-2 border-gray-900 my-2"> --}}
            <h2 class="text-5xl md:text-[60px] font-serif font-black tracking-wider underline uppercase">
                <a href="{{ request()->url() }}">
                    {{ $category }}
                </a>
            </h2>
            {{-- <hr class="w-52 border-t-2 border-gray-900 my-2"> --}}
            {{-- <div class="flex space-x-6 mt-20  font-semibold">
              <a href="#" class="hover:text-black text-xs">BUSINESS</a>
              <a href="#" class="text-red-600 border-b-2 border-red-600 text-xs">POLITICS</a>
              <a href="#" class="hover:text-black text-xs">TECHNOLOGY</a>
          </div> --}}
        </div>

        @if (isset($posts[0]))
            @php

                $post = $posts[0];

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
                <section>
                    <div class="mt-12 md:m-20">
                        <img src="{{ $image }}" alt="Article hero image" class="w-full h-auto object-cover" />
                    </div>

                    <div class="text-center m-10 mt-10 md:mt-[-60px]">
                        <div class="text-red-500 uppercase text-sm font-semibold">
                            {{ $cat }}
                        </div>
                        <h2 class="text-3xl font-bold mt-2">
                            {{ $title }}
                        </h2>
                        <p class="mt-4 max-w-6xl mx-auto text-lg">
                            {{ $description }}
                        </p>

                        <p class="text-sm mt-4 uppercase">BY {{ $author }}</p>
                        <p class="text-gray-600 text-sm mt-4">{{ $date }}</p>
                    </div>
                </section>
            </a>
        @endif


        <div class="max-w-screen-lg mt-28 md:ml-10 px-6">

            @foreach ($posts->slice(1) as $post)
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
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pb-12 border-b border-gray-200">
                        <div class="col-span-1 flex justify-center">
                            <img src="{{ $image }}" alt="Elon Musk"
                                class="w-full max-w-sm rounded object-cover aspect-square" />
                        </div>
                        <div class="lg:col-span-2 md:mt-10">
                            <div class="text-red-500 text-sm uppercase font-semibold tracking-wide mb-2">
                                {{ $category }}
                            </div>
                            <h2 class="text-2xl font-bold leading-snug mb-4">
                                {{ $title }}
                            </h2>
                            <p class="text-gray-700 text-base leading-relaxed max-w-3xl mb-4">
                                {{ $description }}

                            </p>
                            <p class="text-sm text-gray-500 font-medium">BY {{ $author }}</p>
                        </div>
                    </div>
                </a>
            @endforeach

        </div>

        {{-- <div class="flex justify-center mt-20 mb-10">
            <button
                class="bg-red-700 text-white px-6 py-2 text-lg font-semibold hover:bg-red-600 transition duration-200">
                Next Page
            </button>
        </div> --}}

    </section>

    <x-footer />
</body>

</html>

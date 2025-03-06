
<hr class="border-black border-2 w-3/4 xl:ml-10 2xl:ml-44 mt-10" />
<section class="max-w-5xl container xl:ml-10 2xl:ml-44 px-4 sm:px-6 lg:px-8 py-8">

  <h2 class="text-xl font-semibold uppercase"><a href="/category/{{ $cat }}">{{ $cat }} </a></h2>

  <div class="flex flex-col lg:flex-row gap-8 mt-10">
      <div class="flex-1">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            @foreach ($posts->slice(0,4) as $post)

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
                    <a href="{{ $url }}">
                        <div class="space-y-4">
                            <img src="{{ $image }}" alt="Article image" class="w-full h-64 object-cover">
                            <div class="space-y-2">
                                <span class="text-red-600 text-sm font-bold tracking-wider uppercase">{{ $cat }}</span>
                                <h2 class="text-xl font-bold leading-tight ">{{ $title }}</h2>
                                <p class="text-sm text-gray-600 uppercase">BY {{ $author }}</p>
                            </div>
                        </div>
                    </a>
                </article>

            @endforeach

              
            
          </div>
      </div>

      <div class="lg:w-1/3 space-y-8 lg:border-l border-gray-100 lg:pl-8">

        @foreach ($posts->slice(4,9) as $post)

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

                    <article class="space-y-2">
                        <a href="{{ $url }}">
                        <span class="text-red-600 text-sm font-bold tracking-wider uppercase">{{ $cat }}</span>
                        <h2 class="text-sm font-bold leading-tight">{{ $title }}</h2>
                        </a>
                    </article>

        @endforeach

       
      </div>
  </div>
</section>
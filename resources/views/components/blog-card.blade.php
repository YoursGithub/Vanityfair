<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Sen:wght@400..800&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

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
<a href="{{ $url }}">

<div class="bg-white overflow-hidden">
    <div class="h-72">
        <img src="{{ $image }}" 
             alt="Article image" 
             class="w-full h-full object-cover">
    </div>

    <div class="p-4">
      <span class="text-red-600 text-sm font-semibold uppercase tracking-wider">{{ $cat }}</span>
      <h2 class="mt-2 text-lg font-bold tinos-semibold">{{ $title }}</h2>
      <hr class="border-red-500 w-20 my-2" />
      <p class="text-sm mb-4">
        {{ $description }}
      </p>
      <span class="text-sm tinos-regular">By {{ $author }}</span>
    </div>
</div>

</a>

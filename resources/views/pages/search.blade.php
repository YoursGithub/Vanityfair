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
    <section>
      <div class="text-center mt-12">
        <h2 class="text-4xl font-serif font-bold">Search stories from Vanity Fair</h2>
      </div>
    
      <!-- Search Bar Section -->
      <div class="flex justify-center mt-12">
        <div class="flex items-center w-full max-w-4xl px-4">
          <input
            type="text"
            placeholder="Try &quot;Racial Justice&quot;"
            class="w-full px-4 py-[14px] border border-gray-300  focus:outline-none"
          />
          <button class="bg-black text-white px-10 py-4.5 font-semibold hover:bg-gray-800 transition">
            <p class="text-xs">SEARCH</p>
          </button>
        </div>
      </div>
    
      <div class="flex">
      <!-- Results Header -->
      <div class="text-center mt-8">
        <p class="text-sm ml-36 font-semibold  uppercase">
          10,000+ Results from Vanity Fair
        </p>
      </div>
    
      <!-- Sort By Section -->
      <div class="flex justify-end max-w-4xl mx-auto px-4 mt-6">
        <div class="flex items-center space-x-2">
          <label for="sort" class="text-sm font-medium">SORT BY</label>
          <select
            id="sort"
            class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <option>Relevance</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>
    </div>
    </div>
    </section>
  </body>
</html>
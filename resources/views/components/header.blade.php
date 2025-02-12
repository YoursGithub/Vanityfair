<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<style>
  .logo {
      width: 100%;
      height: 100%;
  }
  
  .nav-links {
      /* height: auto; */
      opacity: 1;
  }
  
  .logo-wrapper {
      transition: all 0.3s ease;
      margin-top: -80px;
      width: 300px;
      height: 220px;
  }

  @media (max-width : 400px){
    .logo-wrapper {
      transition: all 0.3s ease;
      margin-top: -80px;
      width: 200px;
    }
  }
  
  .nav-scrolled .logo-wrapper {
      width: 10rem;
      height: 8rem;
      margin-top: -40px;
  }

  .nav-scrolled .news {
      margin-top: -30px;
  }
  
  .nav-scrolled .nav-links {
      height: 0;
      opacity: 0;
      overflow: hidden;
      padding: 0;
  }
</style>
</head>
<body>
<nav class="sticky top-0 w-full h-20 bg-white border-b border-gray-200 z-50" id="navbar">
  <div class="max-w-7xl mx-auto px-4">
      <!-- Top Bar -->
      <div class="flex items-center justify-between py-4">
          <!-- Logo -->
          <div class="flex-1 flex justify-center items-center md:ml-64">
              <a href="/" class="text-xl font-serif text-red-600 uppercase tracking-wider logo-wrapper md:w-80 h-96">
                  <img src="{{Vite::asset('resources/images/VanityFair_Denmark-removebg-preview.png') }}" alt="Vanity Fair" class="logo w-[400px]">
              </a>
          </div>

          <!-- Right Menu -->
          <div class="hidden md:flex items-center news space-x-4 mt-[-75px]">
              <a href="#" class="text-sm uppercase font-bold">Newsletter</a>
              <a href="#" class="bg-red-600 text-white px-4 font-bold py-2 text-sm uppercase">Subscribe</a>
              <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
          </div>
          
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:block nav-links">
          <div class="flex justify-center space-x-8 py-4 mt-[-70px]">

            @foreach ($allCategory as $cat)
            @php

                $title = Str::title($cat->category);
                $url = route('category', ['category' => $cat->category]);
            @endphp

              <a href="{{ $url }}" class="text-sm uppercase font-semibold hover:text-red-500 bg-[linear-gradient(0deg,currentColor,currentColor)] bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-100 ease-in-out">{{ $title }}</a>

            @endforeach
           
          </div>
      </div>
  </div>
</nav>

<script>
  window.addEventListener('scroll', function() {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
          navbar.classList.add('nav-scrolled');
      } else {
          navbar.classList.remove('nav-scrolled');
      }
  });
</script>
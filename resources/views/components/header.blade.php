<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<style>
  .logo {
      width: 100%;
      height: 100%;
  }
  
  .nav-links {
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

  @media (max-width :600px){
    .nav-scrolled .news {
      margin-top: -40px;
  }
  }
  
  .nav-scrolled .nav-links {
      height: 0;
      opacity: 0;
      overflow: hidden;
      padding: 0;
  }
  
  .hamburger {
    position: fixed;
    left: 20px;
    top: 20px;
    z-index: 1000;
    cursor: pointer;
    padding: 10px;
    background: transparent;
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.hamburger.show {
    display: block;
    opacity: 1;
}

.hamburger i {
    font-size: 24px;
    color: #333;
}

.overlay-menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 999;
    transition: all 0.5s ease;
    overflow-y: scroll; 
}

.overlay-menu.active {
    left: 0;
}

.overlay-content {
    min-height: 100%;
    padding: 4rem 0 6rem 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.overlay-menu::-webkit-scrollbar {
    display: none;
}

.overlay-menu {
    -ms-overflow-style: none;  
    scrollbar-width: none; 
}
.menu-item {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #000;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 12px 0;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    transition: color 0.3s ease;
}

.menu-item:hover {
    color: #666;
}
</style>
</head>
<body>
<nav class="sticky top-0 w-full h-20 bg-white border-b border-gray-200 z-50" id="navbar">
    <div class="hamburger" id="hamburger">
        <i class="fa-solid fa-bars"></i>
    </div>

    <div class="overlay-menu" id="overlayMenu">
        <div class="overlay-content flex flex-col items-center space-y-6 pt-20">
            <div class="flex-1 flex justify-center items-center mt-[-35px]">
                <a href="/" class="text-xl font-serif text-red-600 uppercase tracking-wider logo-wrapper md:w-[600px] h-96">
                    <img src="/imagess/VanityFair_Denmark-removebg-preview.png" alt="Vanity Fair" class="logo w-[600px]">
                </a>
            </div>
            <div class="flex flex-col items-center space-y-4 mb-8">
                <a href="#" class="text-center uppercase text-lg tracking-wider font-bold ">Politics</a>
                <a href="#" class="text-center uppercase text-lg tracking-wider font-bold ">Business</a>
                <a href="#" class="text-center uppercase text-lg tracking-wider font-bold ">Hollywood</a>
                <a href="#" class="text-center uppercase text-lg tracking-wider font-bold ">Style</a>
                <a href="#" class="text-center uppercase text-lg tracking-wider font-bold ">Culture</a>
                <a href="#" class="text-center uppercase text-lg tracking-wider font-bold ">Royals</a>
                <a href="#" class="text-center uppercase text-lg tracking-wider font-bold ">Celebrity</a>
                <a href="#" class="text-center uppercase text-lg tracking-wider font-bold ">Video</a>
                <a href="#" class="text-center uppercase text-lg tracking-wider font-bold ">Podcasts</a>
                <a href="#" class="text-center uppercase text-lg tracking-wider font-bold ">Archive</a>
            </div>
    
            <div class="w-24 h-px bg-black"></div>
            
            <div class="flex flex-col items-center space-y-4">
                <a href="#" class="text-center uppercase text-sm tracking-wider hover:text-gray-600">Search</a>
                <a href="#" class="text-center uppercase text-sm tracking-wider hover:text-gray-600">Sign In</a>
                <a href="#" class="text-center uppercase text-sm tracking-wider hover:text-gray-600">Newsletter</a>
                <a href="#" class="text-center text-sm hover:text-gray-600">Subscribe</a>
                <a href="#" class="text-center uppercase text-sm tracking-wider hover:text-gray-600">Give a Gift</a>
                <a href="#" class="text-center uppercase text-sm tracking-wider hover:text-gray-600">Archive</a>
                <a href="#" class="text-center uppercase text-sm tracking-wider hover:text-gray-600">VF Shop</a>
                <a href="#" class="text-center uppercase text-sm tracking-wider hover:text-gray-600">Magazine</a>
            </div>
            
            <div class="w-24 h-px bg-black"></div>
            
            <div class="flex space-x-6 pt-4">
                <a href="#" class="hover:text-gray-600">
                    <i class="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" class="hover:text-gray-600">
                    <i class="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" class="hover:text-gray-600">
                    <i class="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" class="hover:text-gray-600">
                    <i class="fab fa-pinterest-p text-xl"></i>
                </a>
                <a href="#" class="hover:text-gray-600">
                    <i class="fab fa-youtube text-xl"></i>
                </a>
            </div>
        </div>
    </div>


  <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <div class="flex-1 flex justify-center items-center md:ml-64">
            <a href="/" class="text-xl font-serif text-red-600 uppercase tracking-wider logo-wrapper md:w-80 h-96">
                <img src="/imagess/VanityFair_Denmark-removebg-preview.png" 
                     alt="Vanity Fair" 
                     class="logo w-[200px] sm:w-[300px] md:w-[400px] ml-10 md:ml-0">
            </a>
        </div>
        

          <div class="hidden md:flex items-center news space-x-4 mt-[-75px]">
              <a href="#" class="text-sm uppercase font-bold">Newsletter</a>
              <a href="#" class="bg-red-600 text-white px-4 font-bold py-2 text-sm uppercase">Subscribe</a>
              <a href="/search"><i class="fa-solid fa-magnifying-glass"></i></a>
          </div>

        <div class="md:hidden items-center news space-x-4 mt-[-75px]">
            <a href="#" class="bg-red-600 text-white px-2 font-bold py-1 text-xs uppercase">Subscribe</a>
        </div>
          
      </div>

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

  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const overlayMenu = document.getElementById('overlayMenu');
    let isMenuOpen = false;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            hamburger.classList.add('show');
        } else {
            hamburger.classList.remove('show');
            if (isMenuOpen) {
                isMenuOpen = false;
                overlayMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        }
    });

    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            overlayMenu.classList.add('active');
            hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            overlayMenu.classList.remove('active');
            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
});
  
</script>
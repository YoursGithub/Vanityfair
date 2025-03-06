<?php

namespace App\Providers;

use App\Models\Author;
use App\Models\Category;
use App\Models\FirstPost;
use App\Models\Posts;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        view()->share('allCategory', Category::with(['posts'])->get());

        view()->share('allAuthor', Author::all());

        // view()->share('trendingPost', Posts::where('trending',1)->limit(10)->get());

        view()->share('recentPosts', Posts::with('category')->latest()
                                                            ->limit(34)
                                                            ->get());


        view()->share('firstPost', FirstPost::with('post')->find(1)?->post);

        // view()->share('secondPost',FirstPost::with('post')->find(2)?->post ) ;

        // view()->share('randomPosts',Posts::inRandomOrder() 
        //                             ->limit(5)       
        //                             ->get());


        // view()->share('beautyPosts', Posts::with('category')->whereHas('category', function ($query) {
        //                                                     $query->where('category', 'beauty');
        //                                                 })
        //                                                 ->latest()
        //                                                 ->limit(4)
        //                                                 ->get());


        // shareCategoryPosts('luxuryPosts', 'luxury', 6);

        shareCategoryPosts('stylePosts', 'style', 4);

        shareCategoryPosts('politicsPosts', 'politics', 20);

        shareCategoryPosts('hollPosts', 'hollywood', 20);

        shareCategoryPosts('vanPosts', 'vanity fair eksklusiv', 9);

        shareCategoryPosts('celPosts', 'celebrity', 1);




    }
}

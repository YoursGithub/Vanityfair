<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\FirstPost;
use App\Models\Posts;
use App\Models\StaticPage;
use Illuminate\Http\Request;



class PageController extends Controller
{
    public function home(Request $request)
    {
        return view('pages.home');
    }

    public function search(Request $request)
    {
        $search = $request['search'];

        if (!$search) {

            $posts = Posts::limit(30)->get();

        } else {

            $posts = Posts::where('title', 'like', '%' . $search . '%')
                ->orWhere('description', 'like', '%' . $search . '%')
                ->with('category')
                ->latest()
                ->limit(30)
                ->get();
        }

        $number = $posts->count();

        return view('pages.search', compact('posts', 'search' , 'number'));
    }

    public function blog($slug)
    {

        $post = Posts::where('slug', $slug)->with('category')->firstOrFail();

        $categoryName = $post->category->category;

        $categoryId = $post->category->id;

        $relatedPosts = Posts::where('category_id', $categoryId)->where('id', '!=', $post->id)->latest()->limit(12)->get();

        return view('pages.blog', compact('post',  'categoryName', 'relatedPosts'));
    }

    public function category($category)
    {

        $category = strtolower(implode(" ", explode('-', $category)));

        $catExist = Category::where('category', $category)->firstOrFail();

        $posts = Posts::where('category_id', $catExist->id)->latest()->limit(50)->get();

        return view('pages.category', compact('category', 'posts'));
    }

    public function staticPage($slug){

        $page = StaticPage::where('slug',$slug)->firstOrFail() ;
    
        return view('static',compact('page')) ;
    
    }
    
}

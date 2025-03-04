<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\StaticPageController;
use App\Models\Posts;
use App\Models\StaticPage;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;


Route::view('/','pages.index') ;

Route::view('/newsletter', 'pages.newsletter');
Route::view('/about', 'pages.about');
Route::view('/terms', 'pages.terms');
Route::view('/privacy', 'pages.privacy');
Route::view('/userag', 'pages.useragreement');
Route::view('/subscribe', 'pages.subscribe');


// Route::get('/login', function () {

// User::find(1)->update(['email' => 'harpersAdmin@gmail.com' ,'password' => Hash::make('harpersAdmin@Pass@2025')]);

// })->name('admin');



Route::post('/login', [LoginController::class, 'login'])->name('login');
Route::get('/login', [LoginController::class, 'loginForm'])->name('login');


// Route::get('/',[PageController::class, 'home'])->name('home'); 

Route::get('/category/{category}',[PageController::class, 'category'])->name('category'); 
 
Route::get('/blog/{slug}', [PageController::class, 'blog'])->name('blog');

Route::get('/search', [PageController::class, 'search'])->name('search');

Route::get('/page/{slug}',[PageController::class, 'staticPage'])->name('static-page') ;




Route::prefix('auth')->middleware('auth')->group(function () {
    
    Route::get('/', function () {

         return view('admin.dashboard');
    
    })->name('admin.index');



    Route::get('/logout',[LoginController::class, 'logout'] )->name('logout');



    Route::controller(PostController::class)->group( function(){

        Route::post('/image/upload', 'imageUpload')->name('imageUpload');
        Route::post('/image/remove', 'imageRemove')->name('imageRemove') ;

        Route::get('/make-first-post/{id}' , 'makeFirstPost')->name('first_post') ;
        Route::get('/make-second-post/{id}' , 'makeSecondPost')->name('second_post') ;



        Route::get('/create-post','createEditor')->name('create-post');
        Route::post('/create-post', 'createPost')->name('create-post');

    
        Route::get('/update-post/{id}','updateEditor')->name('update-post');
        Route::post('/update-post/{id}','updatePost')->name('update-post');

    
        Route::get('/delete-post/{id}', 'deletePost')->name('delete-post');

        Route::get('/delete-all-posts','allDeletePosts')->name('all-delete');

        Route::get('/trash-delete-all-posts','allDeleteTrashPosts')->name('trash-all-delete');



        Route::get('/trash-posts', 'trashPosts' )->name('trash-posts');
        Route::get('/delete-trash-posts/{id}', 'deleteTrashPosts' )->name('delete-trash-posts');
        Route::get('/restore-trash-posts/{id}', 'restoreTrashPosts' )->name('restore-trash-posts');


    
        Route::get('/all-posts','showPosts')->name('posts');
    
    });



    Route::controller(CategoryController::class)->group( function(){ 

        Route::get('/create-category',  'show')->name('create-category');
        Route::post('/create-category',  'create')->name('create-category');

        Route::get('/update-category/{id}',  'updateShow')->name('update-category');
        Route::post('/update-category/{id}',  'update')->name('update-category');


        Route::get('/delete-category/{id}',  'delete')->name('delete-category');


        Route::get('/all-category' ,  'all_category')->name('all-category');

        Route::get('/sub-category',  'viewSubCategory')->name('sub-category');
        Route::post('/sub-category' ,'subCategory')->name('sub-category') ;

    });

    Route::controller(AuthorController::class)->group( function(){

        Route::get('/create-author',  'show')->name('create-author');
        Route::post('/create-author',  'create')->name('create-author');

        
        Route::get('/update-author/{id}',  'updateShow')->name('update-author');
        Route::post('/update-author/{id}',  'update')->name('update-author');


        Route::get('/delete-author/{id}',  'delete')->name('delete-author');


        Route::get('/all-author' ,  'all_author')->name('all-author');

    }) ;

    Route::controller(StaticPageController::class)->group( function(){
    
        Route::get('/create-page',  'createView')->name('create-page');
        Route::post('/create-page',  'create')->name('create-page');

        Route::get('/update-page/{id}',  'updateView')->name('update-page');
        Route::post('/update-page/{id}',  'update')->name('update-page');

        Route::get('/delete-page/{id}',  'delete')->name('delete-page');



        Route::get('/all-pages' ,  'all_pages')->name('all-pages');


    });



});






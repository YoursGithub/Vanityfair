<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Http\Controllers\PostController;
use App\Models\Author;
use App\Models\Category;
use App\Models\Posts;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->admin();

        $this->category();

        $this->author();

        $catIDs = Category::pluck('id')->toArray();

        if (count($catIDs) < 1) {
            return;
        }

        $blog = file_get_contents(__DIR__ . "/blog.txt");

        $imgArr = ["/images/thumbnail/gratisography-cyber-kitty-1170x780.jpg", "/images/thumbnail/Adam-Beachfront-Dubai-Mag.jpg"];

        for ($i = 0; $i < 50; $i++) {
            $random =  rand(10000, 999999);
            $title = "title for post - " . $random;

            $randomCat = array_rand($catIDs);
            $category = $catIDs[$randomCat];

            $fileName =  $imgArr[rand(0, 1)];

            Posts::create([
                'category_id' => $category,
                'author_id' => 1,
                'trending' => rand(0, 1),
                'title' => $title,
                'slug'  => Str::slug(strtolower($title)),
                'description' => "Description",
                'keywords' => "keyyy",
                'thumbnail' => $fileName,
                'blog' => $blog,
            ]);
        }
    }

    public function author()
    {
        if (!Author::exists()) {

            Author::create([
                'name' => 'saurojit',
                'bio' => 'bioo',
                'image' =>  "/images/thumbnail/Adam-Beachfront-Dubai-Mag.jpg"
            ]);
        }
    }

    public function admin()
    {
        if (!User::exists()) {

            User::create([
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('123')
            ]);
        }
    }

    public function category()
    {
        if (!Category::exists()) {

            $categories = [
                "Politics",
                "Business",
                "Hollywood",
                "Style",
                "Culture",
                "Royals",
                "Celebrity",
                "TV & Films",
                "Vanity Fair Eksklusiv"
            ];

            foreach ($categories as $category) {

                Category::create([
                    'category' => $category,
                ]);


                $sitemap = new PostController();
                $sitemap->sitemap($category, route('category', ['category' => strtolower($category)]));
            }
        }
    }
}

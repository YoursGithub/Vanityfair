<?php

use App\Models\Posts;

if (!function_exists('shareCategoryPosts')) {
    function shareCategoryPosts( string $sharedVariableName , string $categoryName , int $limit = null)
    {
        $posts = Posts::with('category')
            ->whereHas('category', function ($query) use ($categoryName) {
                $query->where('category', $categoryName);
            })
            ->latest();
    
        if ($limit) {
            $posts->limit($limit); // Apply the limit only if it's provided
        }
    
        view()->share($sharedVariableName, $posts->get());
    }
    
}

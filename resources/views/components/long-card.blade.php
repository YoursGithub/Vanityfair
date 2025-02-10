
<div class="wp-block-tpd-block-tpd-featured-posts template-12      " style="--accent-color:">



    <div class="tpd-template-12 tpd-columns-3   ">

        @foreach ($posts as $post)

        @php
            $url = route('blog', ['slug' => $post->slug]);
            $title = Str::title($post->title);

            $image = $post->thumbnail;
            $desc = $post->description;

            $date = $post->created_at->format('d.m.y');
            $author = $post->author?->name;
            $cat = $post->category->category;
            $catUrl = route('category', ['category' => $cat]);

        @endphp

                                            
        <div class="tpd-card show-thumbnail">
            <a thumbnail-size="thumbnail" aria-label="The MasterCraft XStar 25 Brings Luxury To World’s Most Powerful Performance Towboat" href="{{ $url }}" class="img-container">
                <picture>
                <img decoding="async" width="373" height="466" src="{{ $image }}" class="attachment-thumbnail_long size-thumbnail_long wp-post-image" alt="" tpd-template="12" tpd-post-index="0" loading="lazy">
                </picture>
            </a><!-- img-container -->
            <div class="tpd-card-title">
                <p class="categories">
                    <a href="{{ $catUrl }}" rel="tag">{{ $cat }}</a></p>
                <h2 class="tpd-card-headline-title " style="">
                    <a style="" href="{{ $url }}">{{ $title }}</a></h2>
                <div class="tpd-byline">
                </div><!-- tpd-byline -->

            </div><!-- tpd-card-title -->

        </div><!-- tpd-card -->


        @endforeach


    </div>

</div>
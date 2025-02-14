

<section data-vars-block-curation="section" data-vars-block-type="3 Column Block" data-vars-block-slot="3"
    data-vars-block-id="45d17e70-1b1b-4ad5-b763-bc1ff6f157ad" data-vars-block-heading=""
    id="148ffba4-3df8-4fc1-a545-4dc7cbe58ac5" data-lazy-id="P0-10" class="css-hjk2n1 emk51de2">
    <div data-theme-key="three-columns-block-container" class="css-w9tso1 emk51de1">
        
        @foreach ($posts->chunk(4) as $chunk) 
            <div data-theme-key="block-column" class="css-jshx54 emk51de0">

                @foreach ($chunk as $post)
                    @php
                        $url = route('blog', ['slug' => $post->slug]);
                        $title = Str::title($post->title);
                        $image = $post->thumbnail;
                    @endphp

                    <a data-theme-key="custom-item" href="{{ $url }}" class="ee4ms352 css-1vnk40q e1c1bym14">
                        <div class="css-ftsoqv ee4ms351">
                            <img
                                src="{{ $image }}" alt="{{ $title }}"
                                title="{{ $title }}" width="100%" height="auto" decoding="async" loading="lazy"
                                style="aspect-ratio: 1/1 ; object-fit:cover;"
                                >
                        </div>
                        <div data-theme-key="custom-item-content" class="css-ztgqyu ee4ms350">
                            <h2 data-theme-key="custom-item-title" class="css-ve1cwp e10ip9lg6">
                                <span aria-hidden="true" class="css-0 eagam8p0"></span>
                                <span data-theme-key="custom-item-title-text" class="css-2bw2bu e10ip9lg5">
                                    {{ $title }}
                                </span>
                                <span aria-hidden="true" class="css-0 eagam8p1"></span>
                            </h2>
                        </div>
                    </a>

                @endforeach
            </div>
        @endforeach

    </div>
</section>


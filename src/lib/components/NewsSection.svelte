<script lang="ts">
    interface Section {
        type: string;
        content?: string[];
    }

    interface News {
        id: string;
        title: string;
        type: string;
        thumbnail: string;
        sections: Section[];
    }

    let { news } = $props<{ news: News[] }>();
    let displayedNews = $derived(news.slice(0, 3));

    function getNewsExcerpt(sections: Section[]): string {
        const paragraphSection = sections.find(s => s.type === 'paragraph');
        if (paragraphSection?.content?.[0]) {
            return paragraphSection.content[0].slice(0, 150) + '...';
        }
        return '';
    }
</script>

<section class=" bg-blue-100 py-16 px-4">
    <div class="container mx-auto">
        <div class="flex items-center gap-3 mt-4 lg:mt-10 mb-12 lg:mb-16 lg:gap-6">
            <div class="w-2 h-8 bg-blue-700"></div>
            <div class="flex">
                <span class="text-2xl lg:text-3xl"><strong>TIN TỨC</strong></span>
            </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {#each displayedNews as newsItem}
                <a 
                    href={`/news/${newsItem.id}`} 
                    class="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                    <div class="relative aspect-[4/3] overflow-hidden p-2">
                        <img 
                            src={newsItem.thumbnail} 
                            alt={newsItem.title}
                            class="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                            {newsItem.title}
                        </h3>
                        <p class="text-gray-600 text-sm line-clamp-3">
                            {getNewsExcerpt(newsItem.sections)}
                        </p>
                    </div>
                </a>
            {/each}
        </div>

        <div class="text-center mt-12">
            <a 
                href="/news" 
                class="lg:text-xl text-blue-600 hover:text-blue-800 hover:underline inline-block"
            >
                Xem tất cả
            </a>
        </div>
    </div>
</section>


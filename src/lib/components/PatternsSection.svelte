<script lang="ts">
    interface Pattern {
        id: string;
        lable: string;
        image: string;
        catalogImage: string;
    }

    let { patterns } = $props<{ patterns: Pattern[] }>();
    // Take only the first 6 items
    let displayedPatterns = $derived(patterns.slice(0, 6));
</script>

<section class="bg-slate-200 py-16 px-4">
    <div class="container mx-auto">
        <div class="flex items-center gap-3 mt-4 lg:mt-10 mb-12 lg:mb-16 lg:gap-6">
            <div class="w-2 h-8 bg-blue-700"></div>
            <div class="flex ">
                <span class="text-2xl lg:text-3xl"><strong> MẪU MÃ</strong></span>
            </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {#each displayedPatterns as pattern}
                <a 
                    href={`/patterns/${pattern.id}`} 
                    class="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                    <div class="relative aspect-[4/3] overflow-hidden">
                        <img 
                            src={pattern.image} 
                            alt={pattern.lable}
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-center group-hover:text-blue-700 transition-colors">
                            {pattern.lable}
                        </h3>
                    </div>
                </a>
            {/each}
        </div>

        <div class="text-center mt-12">
            <a 
                href="patterns/cabin" 
                class="lg:text-xl text-blue-600 hover:text-blue-800 hover:underline inline-block"
            >
                Tìm hiểu thêm
            </a>
        </div>
    </div>
</section>
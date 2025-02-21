<script lang="ts">
    let { logos } = $props<{ logos: string[] }>();
    let displayedLogos = $derived(logos.slice(0, 10));
</script>

<section class="bg-white py-16 px-4">
    <div class="container mx-auto">
        <h2 class="text-2xl lg:text-3xl font-bold text-slate-600 text-center mb-12 lg:mb-16">
            CÁC ĐỐI TÁC
            <div class="w-48 h-0.5 bg-gray-300 mx-auto mt-1"></div>
        </h2>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {#each displayedLogos as logo}
                <div class="flex items-center justify-center p-4 ">
                    <img 
                        src={logo} 
                        alt="Partner Logo" 
                        class=" h-[100px] object-contain"
                        loading="lazy"
                    />
                </div>
            {/each}
        </div>
    </div>
</section>

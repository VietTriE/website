<script lang="ts">
    let { logos } = $props<{ logos: string[] }>();
    let displayedLogos = $derived(logos.slice(0, 10));
</script>

<section class="bg-white py-12 md:py-20 px-4">
    <div class="container mx-auto">
        <h2 class="text-xl lg:text-3xl font-bold text-slate-600 text-center mb-6 md:mb-10 ">
            CÁC ĐỐI TÁC
            <div class="w-48 h-0.5 bg-gray-300 mx-auto mt-1"></div>
        </h2>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
            {#each displayedLogos as logo}
                <div class="flex items-center justify-center p-4 ">
                    <img 
                        src={logo} 
                        alt="Partner Logo" 
                        class=" h-[70px] md:h-[100px] object-contain"
                        loading="lazy"
                    />
                </div>
            {/each}
        </div>
    </div>
</section>

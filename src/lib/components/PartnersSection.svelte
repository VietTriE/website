<script lang="ts">
    let { logos } = $props<{ logos: string[] }>();
    
    // Make sure we have enough logos for the animation by duplicating the array if necessary
    $effect(() => {
        if (logos.length < 10) {
            logos = [...logos, ...logos, ...logos]; // Duplicate logos to ensure smooth scrolling
        }
    });
    
    // Split logos into two rows
    let topRowLogos = $derived(logos.slice(0, Math.ceil(logos.length / 2)));
    let bottomRowLogos = $derived(logos.slice(Math.ceil(logos.length / 2)));
</script>

<section class="bg-white py-12 md:py-20 px-4">
    <div class="container mx-auto">
        <h2 class="text-xl lg:text-3xl font-bold text-slate-600 text-center mb-6 md:mb-10 ">
            CÁC ĐỐI TÁC
            <div class="w-48 h-0.5 bg-gray-300 mx-auto mt-1"></div>
        </h2>
        
        <div class="flex flex-col gap-6 md:gap-10">
            <!-- Top row -->
            <div class="relative overflow-hidden">
                <div class="logos-slide flex animate-scroll">
                    {#each topRowLogos as logo}
                        <div class="flex-shrink-0 mx-2 sm:mx-4 w-[100px] sm:w-[120px] md:w-[180px]">
                            <img 
                                src={logo} 
                                alt="Partner Logo" 
                                class="h-[70px] md:h-[120px] object-contain"
                                loading="lazy"
                            />
                        </div>
                    {/each}
                    
                    <!-- Duplicate the logos to create a seamless loop -->
                    {#each topRowLogos as logo}
                        <div class="flex-shrink-0 mx-2 sm:mx-4 w-[100px] sm:w-[120px] md:w-[180px]">
                            <img 
                                src={logo} 
                                alt="Partner Logo" 
                                class="h-[70px] md:h-[120px] object-contain"
                                loading="lazy"
                            />
                        </div>
                    {/each}
                </div>
            </div>
            
            <!-- Bottom row (reverse direction) -->
            <div class="relative overflow-hidden">
                <div class="logos-slide-reverse flex animate-scroll-reverse">
                    {#each bottomRowLogos as logo}
                        <div class="flex-shrink-0 mx-2 sm:mx-4 w-[100px] sm:w-[120px] md:w-[180px]">
                            <img 
                                src={logo} 
                                alt="Partner Logo" 
                                class="h-[70px] md:h-[120px] object-contain"
                                loading="lazy"
                            />
                        </div>
                    {/each}
                    
                    <!-- Duplicate the logos to create a seamless loop -->
                    {#each bottomRowLogos as logo}
                        <div class="flex-shrink-0 mx-2 sm:mx-4 w-[100px] sm:w-[120px] md:w-[180px]">
                            <img 
                                src={logo} 
                                alt="Partner Logo" 
                                class="h-[70px] md:h-[120px] object-contain"
                                loading="lazy"
                            />
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
    
    @keyframes scroll-reverse {
        0% {
            transform: translateX(-50%);
        }
        100% {
            transform: translateX(0);
        }
    }
    
    .animate-scroll {
        animation: scroll 20s linear infinite;
    }
    
    .animate-scroll-reverse {
        animation: scroll-reverse 20s linear infinite;
    }
    
    /* Optional: pause the animation on hover */
    /* .logos-slide:hover,
    .logos-slide-reverse:hover {
        animation-play-state: paused;
    } */
    
    /* Make the animation even faster on smaller screens */
    @media (max-width: 768px) {
        .animate-scroll,
        .animate-scroll-reverse {
            animation-duration: 15s;
        }
    }
</style>

<script lang="ts">
    import { onMount } from 'svelte';
    import type { Product } from '$lib/types.js';
	import ProductCard from './ProductCard.svelte';
    // Props for the component
    export let products: Product[] = []; // This should be passed in from the parent component
    
    // Default products if none are provided
    let currentIndex = 0;
    let slideContainer: HTMLElement | null = null;
    let itemWidth = 0;
    let visibleItems = 4;
    
    function updateVisibleItems() {
        if (window.innerWidth < 640) {
            visibleItems = 1;
        } else if (window.innerWidth < 768) {
            visibleItems = 2;
        } else if (window.innerWidth < 1024) {
            visibleItems = 3;
        } else {
            visibleItems = 4;
        }
        
        if (slideContainer) {
            itemWidth = slideContainer.offsetWidth / visibleItems;
            updateSlidePosition();
        }
    }
    
    function updateSlidePosition() {
        if (slideContainer) {
            const translateX = -currentIndex * itemWidth;
            slideContainer.style.transform = `translateX(${translateX}px)`;
        }
    }
    
    function nextSlide() {
        if (currentIndex < products.length - visibleItems) {
            currentIndex++;
            updateSlidePosition();
        }
    }
    
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    }
    
    onMount(() => {
        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);
        
        return () => {
            window.removeEventListener('resize', updateVisibleItems);
        };
    });
</script>

<section class="py-12 bg-gray-50">
    <div class="container mx-auto px-4">
        
        <div class="relative">
            <!-- Previous Button -->
            <button 
                class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors -ml-4"
                on:click={prevSlide}
                disabled={currentIndex === 0}
                aria-label="Previous products"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0f4e96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            
            <!-- Slider Container -->
            <div class="overflow-hidden">
                <div 
                    class="flex transition-transform duration-300 ease-in-out"
                    bind:this={slideContainer}
                >
                    {#each products as product, i}
                        <div class="flex-shrink-0 px-2" style="width: {100/visibleItems}%">
                            <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <ProductCard product={product} />
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
            
            <!-- Next Button -->
            <button 
                class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors -mr-4"
                on:click={nextSlide}
                disabled={currentIndex >= products.length - visibleItems}
                aria-label="Next products"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0f4e96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</section>
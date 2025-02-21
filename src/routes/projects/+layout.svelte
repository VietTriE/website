<script lang="ts">
    import type { Post } from '$lib/types';
    let { data, children } = $props();
    let isMobileMenuOpen = $state(false);

    function formatDate(timestamp: number): string {
        return new Date(timestamp).toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }
</script>

<div class="container mx-auto px-4">
    <!-- Mobile Menu Button -->
    <button 
        class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
        onclick={toggleMobileMenu}
        aria-label="Toggle menu"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <!-- Projects List (Left Side) -->
        <div 
            class="lg:col-span-1 fixed lg:relative lg:block inset-y-0 left-0 z-40 w-64 
                   transform transition-transform duration-300 ease-in-out
                   {isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
                   lg:translate-x-0"
        >
            <div class="bg-white h-full lg:h-auto shadow-lg p-6 lg:sticky lg:top-24">
                <div class="flex justify-between items-center mb-6 lg:block">
                    <h2 class="text-2xl font-bold flex items-center">
                        <span class="w-1 h-6 bg-blue-700 mr-3"></span>
                        DỰ ÁN
                    </h2>
                    <button 
                        class="lg:hidden p-2"
                        onclick={toggleMobileMenu}
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav class="space-y-1">
                    {#each data.projects as project}
                        <a 
                            href={`/projects/${project.id}`}
                            class="block px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors"
                            onclick={() => isMobileMenuOpen = false}
                        >
                            {project.title}
                        </a>
                    {/each}
                </nav>
            </div>
        </div>

        <!-- Project Content (Right Side) -->
        <div class="lg:col-span-4 bg-white rounded-lg shadow-lg lg:border-l">
            {@render children()}
        </div>
    </div>
</div>

<!-- Overlay for mobile menu -->
{#if isMobileMenuOpen}
    <div 
        class="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-300"
        onclick={toggleMobileMenu}
        onkeydown={toggleMobileMenu}
        role="button"
        tabindex="0"
    ></div>
{/if}

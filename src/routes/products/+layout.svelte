<script lang="ts">
    import { page } from '$app/stores';
    let { children } = $props();
    let isMobileMenuOpen = $state(false);

    const productCategories = [
        { title: 'THANG TẢI KHÁCH', href: '/products/thangTaiKhach' },
        { title: 'THANG TẢI HÀNG', href: '/products/thangTaiHang' },
        { title: 'THANG TẢI Ô TÔ', href: '/products/thangTaiOTo' },
        { title: 'THANG TẢI THỰC PHẨM', href: '/products/thangThucPham' },
        { title: 'THANG MÁY QUAN SÁT', href: '/products/thangQuanSat' },
        { title: 'THANG TẢI GIƯỜNG BỆNH', href: '/products/thangTaiGiuongBenh' },
        { title: 'THANG TẢI RÁC', href: '/products/thangTaiRac'},
        { title: 'TỜI TẢI HÀNG', href: '/products/toiTaiHang'},
    ];

    let active = $state((href: string) => $page.url.pathname === href);
</script>

<div class="flex flex-col items-center bg-blue-100">
    <div class="sticky top-20 z-40 bg-white shadow-md w-full">
        <div class="container mx-auto px-4">
            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex space-x-8 py-4 justify-center">
                {#each productCategories as category}
                    <a 
                        href={category.href}
                        class="text-sm font-medium transition-colors {active(category.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}"
                    >
                        {category.title}
                    </a>
                {/each}
            </nav>
    
            <!-- Mobile Navigation -->
            <div class="lg:hidden relative py-4 flex justify-end">
                <button
                    class="flex items-center text-gray-700 hover:text-blue-600 "
                    onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
                >
                    <span class="mr-2 font-semibold">Danh mục sản phẩm</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
    
                {#if isMobileMenuOpen}
                    <div class="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg">
                        {#each productCategories as category}
                            <a 
                                href={category.href}
                                class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                onclick={() => isMobileMenuOpen = false}
                            >
                                {category.title}
                            </a>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    </div>
    
    {@render children()}
    
</div>
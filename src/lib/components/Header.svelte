<script lang="ts">
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const menuItems = $state([
		{ title: 'GIỚI THIỆU', href: '/about' },
		{ title: 'SẢN PHẨM', href: '/products/thangTaiKhach', hasDropdown: true },
		{ title: 'MẪU MÃ', href: '/patterns/cabin', hasDropdown: true },
		{ title: 'DỊCH VỤ', href: '/services' },
		{ title: 'DỰ ÁN', href: '/projects' },
		{ title: 'LIÊN HỆ', href: '/quotes' },
		{ title: 'TIN TỨC', href: '/news' },
		{ title: 'TUYỂN DỤNG', href: '/careers' }
	]);

	// Define the dropdown categories for products and patterns
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

	const patternCategories = [
		{ title: 'CABIN', href: '/patterns/cabin' },
		{ title: 'CỬA TẦNG', href: '/patterns/cuaTang' },
		{ title: 'SÀN CABIN', href: '/patterns/sanCabin' },
		{ title: 'TRẦN GIẢ', href: '/patterns/tranGia' },
		{ title: 'HOA VĂN INOX', href: '/patterns/hoaVanInox' },
		{ title: 'VẬT LIỆU', href: '/patterns/vatLieu' },
		{ title: 'TAY VỊN', href: '/patterns/tayVin'},
		{ title: 'COP/HIB', href: '/patterns/hib'},
	];

	let isMenuOpen = $state(false);
	let isActive = (href: string) => $page.url.pathname.startsWith(href);
	
	// Track which mobile dropdown is expanded
	let expandedMobileDropdown = $state('');
	
	function toggleMobileDropdown(title: string) {
		expandedMobileDropdown = expandedMobileDropdown === title ? '' : title;
	}

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
</script>

<header class="fixed left-0 right-0 top-0 z-50 bg-white shadow-md">
	<div class="container mx-auto px-4">
		<nav class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center">
				<img class=" h-10 md:h-12 object-contain" src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoVietTriPNG-300x68.png" alt="Viet Tri Elevator" />
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center space-x-8 lg:flex">
				{#each menuItems as item}
					<div class="relative group">
						{#if item.hasDropdown}
							<!-- For items with dropdown, the main link becomes a span -->
							<span
								class="cursor-pointer font-medium transition-colors pb-5 block {isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}"
							>
								{item.title}
							</span>
						{:else}
							<a
								href={item.href}
								class="font-medium transition-colors pb-5 block {isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}"
							>
								{item.title}
							</a>
						{/if}
						
						{#if item.hasDropdown}
							<div class="absolute px-2 py-4 border border-gray-200 left-0 top-full w-56 invisible group-hover:visible z-50 bg-white shadow-lg rounded-md">
								{#if item.title === 'SẢN PHẨM'}
									{#each productCategories as category}
										<a 
											href={category.href}
											class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
										>
											{category.title}
										</a>
									{/each}
								{:else if item.title === 'MẪU MÃ'}
									{#each patternCategories as category}
										<a 
											href={category.href}
											class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
										>
											{category.title}
										</a>
									{/each}
								{/if}
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button class="p-2 lg:hidden" onclick={() => (isMenuOpen = !isMenuOpen)}>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if isMenuOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					{/if}
				</svg>
			</button>
		</nav>

		<!-- Mobile Menu -->
		{#if isMenuOpen}
			<div class="py-4 lg:hidden">
				<div class="flex flex-col space-y-4 pl-8">
					{#each menuItems as item}
						<div>
							{#if item.hasDropdown}
								<!-- For items with dropdown, make it clickable to toggle dropdown -->
								<button
									class="font-medium transition-colors text-left w-full {isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}"
									onclick={() => toggleMobileDropdown(item.title)}
								>
									<div class="flex items-center justify-between">
										<span>{item.title}</span>
										<svg 
											class="h-4 w-4 transition-transform duration-200 {expandedMobileDropdown === item.title ? 'rotate-180' : ''}" 
											fill="none" 
											stroke="currentColor" 
											viewBox="0 0 24 24"
										>
											<path 
												stroke-linecap="round" 
												stroke-linejoin="round" 
												stroke-width="2" 
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</div>
								</button>
							{:else}
								<a
									href={item.href}
									class="font-medium transition-colors block {isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}"
									onclick={() => isMenuOpen = false}
								>
									{item.title}
								</a>
							{/if}
							
							{#if item.hasDropdown && expandedMobileDropdown === item.title}
								{#if item.title === 'SẢN PHẨM'}
									<div class="pl-4 mt-2 space-y-2">
										{#each productCategories as category}
											<a 
												href={category.href}
												class="block py-1 text-sm text-gray-700 hover:text-blue-600"
												onclick={() => isMenuOpen = false}
											>
												{category.title}
											</a>
										{/each}
									</div>
								{:else if item.title === 'MẪU MÃ'}
									<div class="pl-4 mt-2 space-y-2">
										{#each patternCategories as category}
											<a 
												href={category.href}
												class="block py-1 text-sm text-gray-700 hover:text-blue-600"
												onclick={() => isMenuOpen = false}
											>
												{category.title}
											</a>
										{/each}
									</div>
								{/if}
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</header>

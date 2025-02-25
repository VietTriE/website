<script lang="ts">
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const menuItems = $state([
		{ title: 'GIỚI THIỆU', href: '/about' },
		{ title: 'SẢN PHẨM', href: 'products/thangTaiKhach' },
		{ title: 'MẪU MÃ', href: '/patterns/cabin' },
		{ title: 'DỊCH VỤ', href: '/services' },
		{ title: 'DỰ ÁN', href: '/projects' },
		{ title: 'LIÊN HỆ', href: '/quotes' },
		{ title: 'TIN TỨC', href: '/news' },
		{ title: 'TUYỂN DỤNG', href: '/careers' }
	]);

	let isMenuOpen = $state(false);
	let isActive = (href: string) => $page.url.pathname.startsWith(href);

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
					<a
						href={item.href}
						class="font-medium transition-colors {isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}"
					>
						{item.title}
					</a>
				{/each}
			</div>

			<!-- Language Selector -->
			<div class="hidden items-center space-x-2 lg:flex">
				<button class="rounded px-2 py-1 hover:bg-gray-100" onclick={() => switchToLanguage('vi')}>
					<img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/viFlag.png" alt="Vietnamese" class="h-6 w-6" />
				</button>
				<button class="rounded px-2 py-1 hover:bg-gray-100" onclick={() => switchToLanguage('en')}>
					<img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/usFlag.png" alt="English" class="h-6 w-6" />
				</button>
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
						<a
							href={item.href}
							class="font-medium transition-colors {isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}"
							onclick={() => isMenuOpen = false}
						>
							{item.title}
						</a>
					{/each}

					<!-- Mobile Language Selector -->
					<div class="flex space-x-4 border-t pt-4">
						<button
							class="flex items-center space-x-2 rounded px-2 py-1 hover:bg-gray-100"
							onclick={() => switchToLanguage('vi')}
						>
							<img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/viFlag.png" alt="Vietnamese" class="h-4 w-4" />
							<span>Tiếng Việt</span>
						</button>
						<button
							class="flex items-center space-x-2 rounded px-2 py-1 hover:bg-gray-100"
							onclick={() => switchToLanguage('en')}
						>
							<img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/usFlag.png" alt="English" class="h-4 w-4" />
							<span>English</span>
						</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</header>

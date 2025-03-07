<script>
	let showPhoneTooltip = false;
	let isMobile = false;

	// Check if device is mobile on component mount
	import { onMount } from 'svelte';
	
	onMount(() => {
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	});

	function handlePhoneClick(e) {
		if (!isMobile) {
			e.preventDefault();
			showPhoneTooltip = !showPhoneTooltip;
		}
	}
</script>

<div class="fixed bottom-16 right-4 z-50 flex flex-col space-y-3">
	<!-- Messenger -->
	<a
		href="https://m.me/CTyThangMayVietTri"
		target="_blank"
		rel="noopener noreferrer"
		class="flex h-12 w-12 items-center justify-center rounded-full bg-[#0099FF] text-white shadow-lg transition-transform hover:scale-110"
		aria-label="Contact us on Messenger"
	>
		<img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/messageContactIcon.png" alt="Messenger" class="w-12 h-12">
	</a>

	<!-- Phone link with tooltip -->
	<div class="relative">
		<a
			href="tel:0982739788"
			on:click={handlePhoneClick}
			class="flex h-12 w-12 items-center justify-center rounded-full bg-[#0099FF] text-white shadow-lg transition-transform hover:scale-110"
			aria-label="Contact us by phone"
		>
			<img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/phoneContactIcon.png" alt="Phone" class="w-12 h-12">
		</a>
		
		{#if showPhoneTooltip && !isMobile}
			<div class="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
				<span class="font-medium">098.273.9788</span>
				<div class="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-y-8 border-y-transparent border-l-white"></div>
			</div>
		{/if}
	</div>

	<!-- Zalo link -->
	<a
		href="https://zalo.me/239837943299975253"
		target="_blank"
		rel="noopener noreferrer"
		class="flex h-12 w-12 items-center justify-center rounded-full bg-[#0099FF] text-white shadow-lg transition-transform hover:scale-110"
		aria-label="Contact us on Zalo"
	>
		<img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/zaloContactIcon.png" alt="Zalo" class="w-12 h-12">
	</a>

</div>

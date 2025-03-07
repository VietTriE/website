<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import Contact from '$lib/components/Contact.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<Header />

	{@render children()}
	<Footer />
	<Contact />
	<!-- <a
		href="tel:0982739788"
		class="fixed bottom-4 right-4 z-50 flex items-center space-x-2 rounded-full bg-blue-600 px-4 py-2 text-white shadow-lg transition-colors hover:bg-blue-700"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
			/>
		</svg>
		<span>0982.739.788</span>
	</a> -->
</ParaglideJS>

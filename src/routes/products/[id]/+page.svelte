<script lang="ts">
	import ProductCard from '$lib/components/product/ProductCard.svelte';

	let { data } = $props();
	
</script>

<div
	class="mb-[80px] mt-[100px] flex max-w-sm flex-col items-center px-2 py-10 md:max-w-2xl lg:max-w-5xl"
>
	<div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-12 ">
		{#each data.products as product}
			<ProductCard {product} />
		{/each}
	</div>
</div>

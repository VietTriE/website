<script lang="ts">
	import type { Product } from '$lib/types.js';
	let { product } = $props<{ product: Product; }>();

</script>

<a href={`/products/${product.categoryId}/${product.id}`}>
	<div
		class="flex flex-col items-center overflow-hidden rounded-lg border bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
	>
		<div class="relative aspect-[4/5] overflow-hidden">
			<img src={product.image} alt={product.name} class="h-full w-full object-cover" />
		</div>

		<div class=" px-4 py-2">
			<div class="mt-1 md:mt-2">
				<h3 class="text-center text-base font-semibold text-slate-600 md:text-xl">
					{product.name}
				</h3>
				<p class="mt-1 line-clamp-1 text-center text-gray-600 md:mt-2">{product.description}</p>
			</div>

			<!-- {#if product.info}
            <div class="space-y-2 text-sm text-gray-600">
                {#if product.info.ceiling}
                    <div class="flex justify-between">
                        <span>Trần:</span>
                        <span class="font-medium">{product.info.ceiling}</span>
                    </div>
                {/if}
                {#if product.info.cabinDoor}
                    <div class="flex justify-between">
                        <span>Cửa cabin:</span>
                        <span class="font-medium">{product.info.cabinDoor}</span>
                    </div>
                {/if}
                {#if product.info.handrail}
                    <div class="flex justify-between">
                        <span>Tay vịn:</span>
                        <span class="font-medium">{product.info.handrail}</span>
                    </div>
                {/if}
            </div>
        {/if} -->

			<div class="p-1 text-center md:p-4">
				<div
					class=" font-semibold italic text-blue-500 hover:underline"
				>
					XEM CHI TIẾT
			</div>
			</div>
		</div>
	</div>
</a>

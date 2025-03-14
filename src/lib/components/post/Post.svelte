<script lang="ts">
    import type { Post } from '$lib/types';
    import Section from './Section.svelte';
    
    let { data } = $props<{ data: Post }>();

    function formatDate(timestamp: number): string {
        return new Date(timestamp).toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
</script>

<article class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-8 lg:py-16">
        <div class="mx-auto max-w-4xl">
            <div class="mb-8 text-sm text-gray-600">
                <!-- {#if data.author}
                    <span class="mr-4">
                        <span class="font-medium">Tác giả:</span> {data.author}
                    </span>
                {/if}
                <span>
                    <span class="font-medium">Ngày đăng:</span> {formatDate(data.createdAt)}
                </span>
                {#if data.editedAt}
                    <span class="ml-4">
                        <span class="font-medium">Cập nhật:</span> {formatDate(data.editedAt)}
                    </span>
                {/if} -->
            </div>

            {#each data.sections as section}
                <Section {section} />
            {/each}
        </div>
    </div>
</article>
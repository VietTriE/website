<script lang="ts">
    interface Section {
        type: string;
        content?: string[];
    }
    
    let { section } = $props<{ section: Section }>();
</script>

{#if section.type === 'header'}
    <h1 class="mb-8 text-2xl font-bold md:text-3xl lg:text-4xl">
        {section.content?.[0]}
    </h1>
{:else if section.type === 'subheader'}
    <h2 class="mb-4 mt-8 text-xl font-semibold md:text-2xl lg:text-3xl">
        {section.content?.[0]}
    </h2>
{:else if section.type === 'paragraph'}
    <div class="mb-6 space-y-4">
        {#each section.content || [] as paragraph}
            <p class="text-gray-700 leading-relaxed md:text-lg">
                {paragraph}
            </p>
        {/each}
    </div>
{:else if section.type === 'image'}
    <div class="my-8">
        <img 
            src={section.content?.[0]} 
            alt="" 
            class="w-full rounded-lg shadow-md"
        />
    </div>
{:else if section.type === 'bulletList'}
    <ul class="mb-6 space-y-2 pl-6 list-disc md:text-lg">
        {#each section.content || [] as item}
            <li class="text-gray-700">
                {item}
            </li>
        {/each}
    </ul>
{:else if section.type === 'space'}
    <div class="h-8"></div>
{/if}
<script lang="ts">
    import Post from "$lib/components/post/Post.svelte";
    let { data } = $props();
</script>

<div class="py-10 mt-10">
    <Post data={data.post} />
</div>


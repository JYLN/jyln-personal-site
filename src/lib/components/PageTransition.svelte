<script lang="ts">
	import { quintInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	export let url: string;
</script>

{#key url}
	<div class="h-[100%]" in:fade={{ delay: 0, duration: 600, easing: quintInOut }}>
		<slot />
	</div>
{/key}

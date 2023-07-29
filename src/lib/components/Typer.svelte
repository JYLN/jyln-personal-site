<script lang="ts">
	import { randomInt } from '$lib/utils/randomInt';
	import { onMount } from 'svelte';

	export let element: string;
	export let tw_class: string;
	export let words: string;
	export let speed: number;

	let typedIndex = 0;
	let typingInterval: ReturnType<typeof setTimeout>;
	let typing = true;
	let showCursor = false;

	$: typedWords = words.slice(0, typedIndex);

	function handleTypingPhase() {
		if (typing && typedIndex !== words.length) {
			showCursor = true;
			typingInterval = setTimeout(() => {
				typedIndex++;
				handleTypingPhase();
			}, randomInt(speed, speed + 80));
		} else {
			clearTimeout(typingInterval);
			typing = false;
		}
	}

	onMount(() => {
		handleTypingPhase();

		return () => {
			clearTimeout(typingInterval);
		};
	});
</script>

<div
	class="inline-flex items-end gap-1.5 after:text-6xl after:text-white"
	class:after-pipe={showCursor && typing === true}
	class:after-under={typing === false}
>
	<svelte:element this={element} class={tw_class}>
		{typedWords}
	</svelte:element>
</div>

<style lang="postcss">
	.after-pipe {
		@apply after:relative after:-top-2 after:font-bold after:content-['|'];
	}

	.after-under {
		@apply after:animate-blinking after:content-['\_'];
	}
</style>

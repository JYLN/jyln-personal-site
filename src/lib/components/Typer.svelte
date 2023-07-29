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

	$: typedWords = words.slice(0, typedIndex);

	function handleTypingPhase() {
		if (typing && typedIndex !== words.length) {
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
	class="inline-flex items-end gap-1.5 after:text-6xl after:text-white after:content-['\_']"
	class:after:animate-blinking={typing === false}
>
	<svelte:element this={element} class={tw_class}>
		{typedWords}
	</svelte:element>
</div>

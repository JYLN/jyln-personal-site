<script lang="ts">
	import { onMount } from 'svelte';

	let dark: boolean;
	let hidden = true;

	function toggleDark() {
		setMode(!dark);
	}

	function setMode(val: boolean) {
		dark = val;

		if (dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		localStorage.theme = dark ? 'dark' : 'light';

		if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
			localStorage.removeItem('theme');
		}
	}

	function handleMediaChange({ matches: dark }: MediaQueryListEvent) {
		if (!localStorage.theme) {
			setMode(dark);
		}
	}

	onMount(() => {
		dark = document.documentElement.classList.contains('dark');
		hidden = false;

		const mediaMatch = window.matchMedia('(prefers-color-scheme: dark)');
		mediaMatch.addEventListener('change', handleMediaChange);

		return () => {
			mediaMatch.removeEventListener('change', handleMediaChange);
		};
	});
</script>

<svelte:head>
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<button on:click={toggleDark} class:hidden type="button">
	<i class="bx bxs-sun" class:hidden={!dark} />
	<i class="bx bxs-moon" class:hidden={dark} />
</button>

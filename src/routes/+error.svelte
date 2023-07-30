<script lang="ts">
	import { page } from '$app/stores';
</script>

<section>
	<article>
		<h1>{$page.status}</h1>
		<p>{$page.error?.message}</p>
	</article>
	<button on:click={() => history.back()}>Go back</button>
</section>

<style lang="postcss">
	section {
		@apply mx-auto flex h-full w-full max-w-[50rem] flex-col items-center justify-center;
	}

	article {
		@apply mb-8 flex flex-col items-center justify-center space-y-3;
	}

	h1 {
		@apply font-poppins text-8xl font-extrabold;
	}

	p {
		@apply font-inter text-2xl;
	}

	button {
		@apply rounded-full bg-blue-600 px-8 py-2 text-lg font-bold transition duration-200 ease-in-out hover:bg-blue-700 active:scale-90;
	}
</style>

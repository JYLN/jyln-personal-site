<script lang="ts">
	export let href: string;
	export let colors: string = 'bg-zinc-600';
	export let disabled: boolean = false;
</script>

<a
	class={disabled
		? 'btn disabled hover:animate-wiggle active:animate-wiggle'
		: `btn group bg-gradient-to-r ${colors} transition duration-150 ease-in-out focus:outline-none active:scale-90`}
	{href}
	target={href.includes('https://') ? '_blank' : undefined}
>
	<span
		class="w-full rounded-full bg-zinc-50 px-8 py-2 transition group-hover:bg-opacity-0 group-hover:text-zinc-50 dark:bg-zinc-900"
	>
		<slot />
	</span>
</a>

<style lang="postcss">
	.btn {
		@apply inline-flex rounded-full p-0.5 font-poppins font-bold;
	}

	.disabled {
		@apply cursor-not-allowed bg-zinc-600 text-zinc-500;
	}
</style>

<script lang="ts">
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Search from '$lib/components/Search.svelte';
	import { resolve } from '$app/paths';
</script>

<header class="flex h-16 items-center justify-center">
	<div class="flex w-full max-w-6xl items-center justify-center md:justify-between">
		<nav>
			<ul class="hidden gap-3 font-heading uppercase md:flex">
				<li><a href={resolve('/')}> Home </a></li>
				<li><a href={resolve('/')}> Random </a></li>
			</ul>
		</nav>
		<div class="flex w-full max-w-xl gap-5 px-4 font-heading md:px-0">
			<ThemeToggle />
			<Search />
		</div>
	</div>
</header>

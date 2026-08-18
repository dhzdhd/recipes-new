<script>
	import Radio from '$lib/components/Radio.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Search from '$lib/components/Search.svelte';
</script>

<header class="flex h-16 items-center justify-center">
	<div class="flex w-full max-w-6xl items-center justify-between">
		<nav>
			<ul class="flex gap-3 font-heading uppercase">
				<li><a href="/"> Home </a></li>
				<li><a href="/"> Random </a></li>
			</ul>
		</nav>
		<div class="flex gap-5 font-heading">
			<ThemeToggle />
			<Search />
		</div>
	</div>
</header>
<main class="flex flex-col gap-20">
	<section id="hero" class="relative max-h-176 w-full overflow-hidden">
		<video src="/hero.mp4" autoplay class="left-0 w-dvw object-cover">
			<track kind="captions" />
		</video>
		<div
			class="justify-left absolute top-0 left-0 flex h-176 min-w-dvw items-center justify-center bg-black/50"
		>
			<div class="min-w-6xl">
				<h1 class="max-w-md text-6xl font-semibold text-white">Big and Bubbly Focaccia</h1>
			</div>
		</div>
	</section>
	<section id="meta" class="flex h-180 w-full items-center justify-center">
		<div class="flex w-full max-w-6xl gap-20">
			<div class="grid w-full grid-cols-3 grid-rows-5 gap-10">
				<p class="col-span-3 row-span-3 font-heading text-lg">
					Why bake one big cheesecake when you can hand a personal-sized treat to everyone at the
					table? This mini cheesecake recipe is small but mighty, with a buttery graham cracker
					crust and a creamy filling brightened with sour cream and a splash of lemon. Pile the
					adorable cheesecakes high with fresh berries, finish them with a dollop of your favorite
					jam or curd, or top them with a drizzle of melted chocolate, and you’ve got the cutest,
					easiest-to-serve cheesecakes around.
				</p>
				<div class="flex-col gap-5">
					<h2 class="text-xl">Prep</h2>
					<h3 class="text-3xl">30 min</h3>
				</div>
				<div class="flex-col gap-5">
					<h2 class="text-xl">Cook</h2>
					<h3 class="text-3xl">30 min</h3>
				</div>
				<div class="flex-col gap-5">
					<h2 class="text-xl">Total</h2>
					<h3 class="text-3xl">1 hr</h3>
				</div>
				<div class="col-span-3 flex-col gap-5">
					<h2 class="text-xl">Yield</h2>
					<h3 class="text-3xl">12 mini cheesecakes</h3>
				</div>
			</div>
			<div id="photo-grid" class="grid h-full w-full grid-cols-3 grid-rows-3 gap-2">
				<div class="col-span-3 row-span-2">
					<img src="/image.avif" alt="Food" />
				</div>
				<!-- {#each ['/image.avif', '/image.avif', '/image.avif'] as src, idx (src)}
					<div class="h-full w-full snap-center">
						<img class="h-full w-full" {src} alt="Food" />
					</div>
				{/each} -->
			</div>
		</div>
	</section>
	<section id="instructions-and-ingredients" class="flex w-full items-center justify-center py-20">
		<div class="grid w-full max-w-6xl grid-cols-10 grid-rows-1 gap-20">
			<aside class="col-span-3">
				<h1 class="text-3xl">Ingredients</h1>
				<div>
					<!-- {#each ['/image.avif', '/image.avif', '/image.avif'] as src, idx (src)}
					<div class="h-full w-full snap-center">
						<img class="h-full w-full" {src} alt="Food" />
					</div>
				{/each} -->
				</div>
			</aside>
			<article class="col-span-7 bg-muted p-20">
				<h1 class="text-3xl">Instructions</h1>
				<div>
					<!-- {#each ['/image.avif', '/image.avif', '/image.avif'] as src, idx (src)}
					<div class="h-full w-full snap-center">
						<img class="h-full w-full" {src} alt="Food" />
					</div>
				{/each} -->
				</div>
			</article>
		</div>
	</section>
	<section id="recommended" class="flex w-full items-center justify-center">
		<div class="w-full max-w-6xl justify-center">
			<h1 class="w-full pb-10 text-center text-4xl">Recommended Recipes</h1>
			<div class="grid grid-cols-4">
				<a href="/" id="recipe-card" class="group/link flex flex-col gap-10 border pb-10">
					<img class="group-hover/link:opacity-70" src="/image.avif" alt="" />
					<div class="flex flex-col gap-2">
						<h3 class="text-center font-heading text-sm">CHEESECAKE</h3>
						<h2 class="text-center text-2xl group-hover/link:text-primary">
							Divine Chocolate Cheesecake
						</h2>
					</div>
				</a>
			</div>
		</div>
	</section>
</main>
<footer></footer>

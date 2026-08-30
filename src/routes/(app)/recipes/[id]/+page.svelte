<script>
	import Radio from '$lib/components/Radio.svelte';

	import Carousel from '@/components/Carousel.svelte';
	import RecipeCard from '@/components/RecipeCard.svelte';
</script>

<main class="flex flex-col gap-5 pb-24 md:gap-16">
	<section id="hero" class="relative w-full overflow-hidden md:max-h-176">
		<video src="/hero.mp4" autoplay class="left-0 w-dvw object-cover">
			<track kind="captions" />
		</video>
		<div
			class="justify-left absolute top-0 left-0 flex h-52 min-w-dvw items-center justify-center bg-black/50 md:h-176"
		>
			<div class="md:min-w-6xl">
				<h1 class="max-w-xs text-3xl font-semibold text-white md:max-w-md md:text-6xl">
					Big and Bubbly Focaccia
				</h1>
			</div>
		</div>
	</section>
	<section id="meta" class="flex w-full items-center justify-center md:h-180">
		<div class="flex w-full max-w-6xl flex-col gap-20 px-4 md:flex-row">
			<div class="flex w-full grid-cols-3 grid-rows-5 flex-col gap-10 md:grid">
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
				<div class="col-span-3 row-span-2">
					<Carousel />
				</div>
				<!-- {#each ['/image.avif', '/image.avif', '/image.avif'] as src, idx (src)}
					<div class="h-full w-full snap-center">
						<img class="h-full w-full" {src} alt="Food" />
					</div>
				{/each} -->
			</div>
		</div>
	</section>
	<section
		id="instructions-and-ingredients"
		class="flex w-full items-center justify-center md:flex-col md:py-20"
	>
		<div class="flex w-full max-w-6xl grid-cols-10 grid-rows-1 flex-col gap-20 md:grid">
			<aside class="col-span-3 pt-20">
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
					{#each ['/image.avif', '/image.avif', '/image.avif'] as src, idx (idx)}
						<div class="h-full w-full snap-center">
							<img class="h-full w-full" {src} alt="Food" />
						</div>
					{/each}
				</div>
			</article>
		</div>
	</section>
	<section id="recommended" class="flex w-full items-center justify-center">
		<div class="w-full max-w-6xl justify-center">
			<h1 class="w-full pb-10 text-center text-4xl">Recommended Recipes</h1>
			<div class="flex grid-cols-4 flex-col gap-2 md:grid">
				<RecipeCard tag="CHEESECAKE" title="Divine Chocolate Cheesecake" image="/image.avif" />
			</div>
		</div>
	</section>
</main>
<footer></footer>

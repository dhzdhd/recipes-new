<script>
	import Radio from '$lib/ui/Radio.svelte';
</script>

<header></header>
<main class="h-dvh min-w-5xl">
	<section id="hero" class="max-h-176 w-full overflow-hidden">
		<video src="/hero.mp4" autoplay class="left-0 w-dvw object-cover">
			<track kind="captions" />
		</video>
		<div
			class="justify-left absolute top-0 left-0 flex h-176 max-w-60 min-w-dvw items-center justify-center bg-black/50"
		>
			<div class="min-w-270">
				<h1 class="max-w-104 text-6xl font-semibold">Big and Bubbly Focaccia</h1>
			</div>
		</div>
	</section>
	<section id="meta"></section>
	<section id="instructions-and-ingredients">
		<aside>
			<h1>Ingredients</h1>
		</aside>
		<article>
			<h1>Instructions</h1>
			<p></p>
		</article>
	</section>
	<section id="recommended"></section>
	<Radio text="1" />
</main>
<footer></footer>

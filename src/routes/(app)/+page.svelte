<script lang="ts">
	import RecipeCard from '@/components/RecipeCard.svelte';

	let { data } = $props();
</script>

<main class="flex w-full flex-col items-center gap-5 pb-24 md:gap-16">
	<section id="hero" class="grid w-full grid-cols-4 py-10 md:max-w-6xl">
		{#each data.recipes as recipe (recipe.slug)}
			<RecipeCard title={recipe.recipe.title} tag="FOOD" image={recipe.recipe.heroImage} />
		{/each}
	</section>
</main>

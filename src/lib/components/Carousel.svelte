<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<Carousel.Root class="relative">
	<Carousel.Content>
		{#each Array(5) as _, i (i)}
			<Carousel.Item class="h-full basis-1/2">
				<div class="p-1">
					<img src="/image.avif" alt="" />
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<div class="relative h-full">
		<Carousel.Previous class="-top-40 left-0 bg-primary text-foreground" />
		<Carousel.Next class="-top-40 right-0 bg-primary text-foreground" />
	</div>
</Carousel.Root>

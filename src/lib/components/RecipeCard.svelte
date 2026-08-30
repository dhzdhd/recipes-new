<script lang="ts">
	import { resolve } from '$app/paths';

	interface Props {
		tag: string;
		title: string;
		image: string;
	}

	const { tag, title, image }: Props = $props();
</script>

<a
	href={resolve(`/recipes/${title}`)}
	id="recipe-card"
	class="group/link mx-4 grid grid-rows-2 border md:mx-0"
>
	<img class="group-hover/link:opacity-70" src={image} alt={title} />
	<div class="flex flex-col gap-2 self-center">
		<h3 class="text-center font-heading text-sm">{tag}</h3>
		<h2 class="text-center text-2xl group-hover/link:text-primary">{title}</h2>
	</div>
</a>

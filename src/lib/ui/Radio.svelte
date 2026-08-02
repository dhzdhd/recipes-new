<script lang="ts">
	interface RadioProps {
		text: string;
	}

	const props: RadioProps = $props();
</script>

<label class="inline-flex aspect-square h-4 cursor-pointer items-center justify-center">
	<input type="checkbox" class=" hidden appearance-none checked:bg-accent" />
	<span class="flex items-center justify-center">{props.text}</span>
</label>

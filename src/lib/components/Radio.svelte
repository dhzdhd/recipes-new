<script lang="ts">
	interface RadioProps {
		text: string;
	}

	const props: RadioProps = $props();
</script>

<label
	class="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-foreground has-checked:bg-primary"
>
	<input type="checkbox" class=" hidden appearance-none checked:bg-accent" />
	<span class="flex items-center justify-center text-foreground">{props.text}</span>
</label>

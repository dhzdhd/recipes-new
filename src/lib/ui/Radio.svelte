<script lang="ts">
	interface RadioProps {
		text: string;
	}

	const props: RadioProps = $props();
</script>

<label class="border border-foreground rounded-full inline-flex aspect-square h-6 cursor-pointer items-center has-[:checked]:bg-primary justify-center">
	<input type="checkbox" class=" hidden appearance-none checked:bg-accent" />
	<span class="flex items-center justify-center text-foreground">{props.text}</span>
</label>

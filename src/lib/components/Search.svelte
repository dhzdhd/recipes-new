<script lang="ts">
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import Arrow from '@lucide/svelte/icons/arrow-right';
</script>

<InputGroup.Root>
	<InputGroup.Input placeholder="Search recipes" />
	<InputGroup.Addon align="inline-end">
		<InputGroup.Button variant="default"><Arrow /></InputGroup.Button>
	</InputGroup.Addon>
</InputGroup.Root>

<script lang="ts">
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import Arrow from '@lucide/svelte/icons/arrow-right';
</script>

<InputGroup.Root>
	<InputGroup.Input placeholder="Search recipes" />
	<InputGroup.Addon class="h-full p-0" align="inline-end">
		<InputGroup.Button variant="default" class="h-full w-10"><Arrow /></InputGroup.Button>
	</InputGroup.Addon>
</InputGroup.Root>

<script lang="ts">
	import { onMount } from 'svelte';
	import { init, type CmsConfig } from '@sveltia/cms';

	const config: CmsConfig = {
		load_config_file: false,
		backend: { name: 'test-repo' },
		media_folder: 'static/media',
		public_folder: '/media',
		collections: [
			{
				name: 'posts',
				label: 'Posts',
				folder: 'content/posts',
				fields: [
					{ label: 'Title', name: 'title', widget: 'string' },
					{ label: 'Date', name: 'date', widget: 'datetime' },
					{ label: 'Body', name: 'body', widget: 'markdown' }
				]
			}
		]
	};

	onMount(() => init({ config }));
</script>

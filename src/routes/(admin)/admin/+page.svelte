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
					{ label: 'Created Date', name: 'created_date', widget: 'datetime' },
					{ label: 'Updated Date', name: 'updated_date', widget: 'datetime' },
					{ label: 'Description', name: 'description', widget: 'markdown' },
					{
						label: 'Instructions',
						name: 'instructions',
						widget: 'list',
						fields: [
							{ label: "Instruction (don't add number)", name: 'instruction', widget: 'richtext' }
						]
					},
					{
						label: 'Ingredients',
						name: 'ingredients',
						widget: 'list',
						fields: [{ label: 'Ingredient', name: 'ingredient', widget: 'richtext' }]
					},
					{
						label: 'Tags',
						name: 'tags',
						widget: 'list',
						allow_duplicate: false,
						required: false,
						fields: [{ label: 'Tag', name: 'tag', widget: 'relation', collection: 'tags' }]
					}
				]
			},
			{
				name: 'tags',
				label: 'Tags',
				folder: 'content/tags',
				fields: [{ label: 'Title', name: 'title', widget: 'string' }]
			}
		]
	};

	onMount(() => init({ config }));
</script>

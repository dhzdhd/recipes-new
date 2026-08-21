<script lang="ts">
	import { onMount } from 'svelte';
	import { init, type CmsConfig } from '@sveltia/cms';

	const config: CmsConfig = {
		load_config_file: false,
		backend: { name: 'github', repo: 'dhzdhd/recipes' },
		media_folder: 'static/media',
		public_folder: '/media',
		collections: [
			{
				name: 'recipes',
				label: 'Recipes',
				folder: 'content/recipes',
				fields: [
					{ label: 'Title', name: 'title', widget: 'string' },
					{ label: 'Hero image', name: 'hero_image', widget: 'image' },
					{ label: 'Main image', name: 'main_image', widget: 'image' },
					{
						label: 'Sub images',
						name: 'sub_images',
						widget: 'list',
						fields: [{ label: 'Sub image', name: 'sub_image', widget: 'image' }]
					},
					{ label: 'Created Date', name: 'created_date', widget: 'datetime' },
					{ label: 'Updated Date', name: 'updated_date', widget: 'datetime' },
					{ label: 'Description', name: 'description', widget: 'markdown' },
					{ label: 'Prep time (min)', name: 'prep_time', widget: 'number' },
					{ label: 'Cook/Bake time (min)', name: 'cook_time', widget: 'number' },
					{ label: 'Yield', name: 'yield', widget: 'text' },

					{
						label: 'Ingredients',
						name: 'ingredients',
						widget: 'list',
						fields: [
							{
								label: 'Group title',
								name: 'group_title',
								widget: 'text'
							},
							{
								label: 'Group',
								name: 'group',
								widget: 'list',
								fields: [
									{
										label: "Ingredient (don't add number)",
										name: 'ingredient',
										widget: 'richtext'
									}
								]
							}
						]
					},
					{
						label: 'Instructions',
						name: 'instructions',
						widget: 'list',
						fields: [
							{
								label: 'Group title',
								name: 'group_title',
								widget: 'text'
							},
							{
								label: 'Group',
								name: 'group',
								widget: 'list',
								fields: [
									{
										label: "Instruction (don't add number)",
										name: 'instruction',
										widget: 'richtext'
									}
								]
							}
						]
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
			}
		]
	};

	onMount(() => init({ config }));
</script>

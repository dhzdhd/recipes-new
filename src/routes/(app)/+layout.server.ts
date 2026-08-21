import path from 'node:path';
import * as fs from 'node:fs';
import type { Recipe, IngredientGroup, InstructionGroup } from '@/types';
import YAML from 'yaml';

const stripDashes = (raw: string): string => {
	return raw.replace(/\\-{3}/g, '');
};

const parseRecipe = (raw: string): Recipe => {
	const parsed = YAML.parse(stripDashes(raw));

	return {
		title: parsed['title'],
		heroImage: parsed['hero_image'],
		mainImage: parsed['main_image'],
		subImages: parsed['sub_images'],
		createdDate: Date.parse(parsed['created_date']),
		updatedDate: Date.parse(parsed['updated_date']),
		description: parsed['description'],
		prepTime: parsed['prep_time'],
		cookTime: parsed['cook_time'],
		yield: parsed['yield'],
		ingredients: parsed['ingredients'].map(
			(group: { group_title: string; group: { ingredient: string }[] }) => {
				return {
					title: group['group_title'],
					ingredients: group['group'].map((ing) => ing['ingredient'])
				} satisfies IngredientGroup;
			}
		),
		instructions: parsed['instructions'].map(
			(group: { group_title: string; group: { instruction: string }[] }) => {
				return {
					title: group['group_title'],
					instructions: group['group'].map((ing) => ing['instruction'])
				} satisfies InstructionGroup;
			}
		),
		tags: parsed['tags']
	} satisfies Recipe;
};

export const load = async () => {
	try {
		const recipesDir = path.resolve('content/recipes');
		const recipesFiles = fs.readdirSync(recipesDir).filter((f) => f.endsWith('.md'));

		const recipes = recipesFiles.map((file) => {
			const raw: string = fs.readFileSync(path.join(recipesDir, file), 'utf-8');
			return { slug: file.replace('.md', ''), recipe: parseRecipe(raw) };
		});

		return { recipes };
	} catch (err) {
		console.log(`Error in retrieving/parsing markdown files - ${err}`);
		return {};
	}
};

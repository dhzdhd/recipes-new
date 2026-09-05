import path from 'path';
import type { EntryGenerator } from './$types';
import * as fs from 'node:fs';

export const entries: EntryGenerator = () => {
	try {
		const recipesDir = path.resolve('content/recipes');
		const recipesFiles = fs.readdirSync(recipesDir).filter((f) => f.endsWith('.md'));

		const recipes = recipesFiles.map((file) => {
			const slug = file.replace('.md', '');
			return { slug, id: slug };
		});

		return recipes;
	} catch (err) {
		console.log(`Error in retrieving/parsing markdown files - ${err}`);
		return [];
	}
};

export const prerender = true;

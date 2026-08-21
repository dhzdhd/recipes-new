export interface Recipe {
	title: string;
	heroImage: string;
	mainImage: string;
	subImages: string[];
	createdDate: number;
	updatedDate: number;
	description: string;
	prepTime: number;
	cookTime: number;
	yield: string;
	ingredients: IngredientGroup[];
	instructions: InstructionGroup[];
	tags: string[];
}

export interface IngredientGroup {
	title: string;
	ingredients: string[];
}

export interface InstructionGroup {
	title: string;
	instructions: string[];
}

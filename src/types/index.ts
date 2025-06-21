export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes?: number;
  servings?: number;
  cuisines?: string[];
  dishTypes?: string[];
}

export interface RecipeDetails extends Recipe {
  summary: string;
  instructions: string;
  extendedIngredients: Ingredient[];
  analyzedInstructions: AnalyzedInstruction[];
  nutrition?: Nutrition;
}

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  original: string;
}

export interface AnalyzedInstruction {
  name: string;
  steps: Step[];
}

export interface Step {
  number: number;
  step: string;
  ingredients: Ingredient[];
  equipment: Equipment[];
}

export interface Equipment {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface Nutrition {
  nutrients: Nutrient[];
}

export interface Nutrient {
  name: string;
  amount: number;
  unit: string;
}

export interface SearchParams {
  query?: string;
  cuisine?: string;
  maxReadyTime?: number;
}

export interface SearchFormData {
  query: string;
  cuisine: string;
  maxReadyTime: string;
}

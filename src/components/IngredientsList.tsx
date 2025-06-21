import { Ingredient } from '@/types';

interface IngredientsListProps {
  ingredients: Ingredient[];
}

export default function IngredientsList({ ingredients }: IngredientsListProps) {
  if (!ingredients || ingredients.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Ingredients
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="flex items-center p-3 bg-gray-50 rounded-lg"
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
            <span className="text-gray-700">
              {ingredient.original}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 
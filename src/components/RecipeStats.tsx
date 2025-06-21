import { RecipeDetails } from '@/types';

interface RecipeStatsProps {
  recipe: RecipeDetails;
}

export default function RecipeStats({ recipe }: RecipeStatsProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
      {recipe.readyInMinutes && (
        <div className="flex items-center">
          <span className="mr-1">⏱️</span>
          <span>{recipe.readyInMinutes} minutes</span>
        </div>
      )}
      {recipe.servings && (
        <div className="flex items-center">
          <span className="mr-1">👥</span>
          <span>{recipe.servings} servings</span>
        </div>
      )}
      {recipe.cuisines && recipe.cuisines.length > 0 && (
        <div className="flex items-center">
          <span className="mr-1">🌍</span>
          <span>{recipe.cuisines.join(', ')}</span>
        </div>
      )}
    </div>
  );
} 
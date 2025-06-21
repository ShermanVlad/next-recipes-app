import Link from 'next/link';
import { Recipe } from '@/types';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        {recipe.image ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {recipe.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          {recipe.readyInMinutes && (
            <span>⏱️ {recipe.readyInMinutes} min</span>
          )}
          {recipe.servings && (
            <span>👥 {recipe.servings} servings</span>
          )}
        </div>
        {recipe.cuisines && recipe.cuisines.length > 0 && (
          <div className="mt-2">
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {recipe.cuisines[0]}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
} 
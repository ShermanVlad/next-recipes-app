import Link from 'next/link';
import { Recipe } from '@/types';
import RecipeCard from './RecipeCard';

interface RecipesGridProps {
  recipes: Recipe[];
}

export default function RecipesGrid({ recipes }: RecipesGridProps) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          No recipes found
        </h3>
        <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
        <Link
          href="/"
          className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          New Search
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

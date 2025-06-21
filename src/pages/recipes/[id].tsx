import { GetServerSideProps } from 'next';
import { Suspense } from 'react';
import { RecipeDetails } from '@/types';
import { getRecipeDetails } from '@/services/api';
import {
  PageHeader,
  RecipeStats,
  IngredientsList,
  InstructionsList,
  NutritionInfo,
  RecipeDetailsLoadingSkeleton,
  ErrorDisplay
} from '@/components';

interface RecipeDetailsPageProps {
  recipe: RecipeDetails;
  error?: string;
}

export default function RecipeDetailsPage({ recipe, error }: RecipeDetailsPageProps) {
  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Recipe Details" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={<RecipeDetailsLoadingSkeleton />}>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {recipe.image && (
              <div className="w-full h-64 sm:h-80 bg-gray-200">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-6 sm:p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {recipe.title}
              </h1>

              <RecipeStats recipe={recipe} />

              {recipe.summary && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    About this recipe
                  </h2>
                  <div
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: recipe.summary }}
                  />
                </div>
              )}

              <IngredientsList ingredients={recipe.extendedIngredients || []} />
              <InstructionsList instructions={recipe.analyzedInstructions || []} />
              <NutritionInfo nutrition={recipe.nutrition} />
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.params!;
    const recipeId = parseInt(id as string);

    if (isNaN(recipeId)) {
      return {
        notFound: true,
      };
    }

    const recipe = await getRecipeDetails(recipeId);

    return {
      props: {
        recipe,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return {
      props: {
        recipe: {} as RecipeDetails,
        error: 'Failed to fetch recipe details. Please try again.',
      },
    };
  }
}; 
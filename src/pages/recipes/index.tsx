import { GetServerSideProps } from 'next';
import { Suspense } from 'react';
import { Recipe, SearchParams } from '@/types';
import { searchRecipes } from '@/services/api';
import {
  PageHeader,
  SearchSummary,
  RecipesGrid,
  RecipesLoadingSkeleton,
  ErrorDisplay,
} from '@/components';

interface RecipesPageProps {
  recipes: Recipe[];
  searchParams: SearchParams;
  error?: string;
}

export default function RecipesPage({
  recipes,
  searchParams,
  error,
}: RecipesPageProps) {
  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Recipe Results" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SearchSummary searchParams={searchParams} />

        <div className="mb-6">
          <p className="text-gray-600">
            Found {recipes.length} recipe{recipes.length !== 1 ? 's' : ''}
          </p>
        </div>

        <Suspense fallback={<RecipesLoadingSkeleton />}>
          <RecipesGrid recipes={recipes} />
        </Suspense>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { query, cuisine, maxReadyTime } = context.query;

    const searchParams: SearchParams = {};
    if (query) searchParams.query = query as string;
    if (cuisine) searchParams.cuisine = cuisine as string;
    if (maxReadyTime)
      searchParams.maxReadyTime = parseInt(maxReadyTime as string);

    if (
      !searchParams.query &&
      !searchParams.cuisine &&
      !searchParams.maxReadyTime
    ) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    const recipes = await searchRecipes(searchParams);

    return {
      props: {
        recipes,
        searchParams,
      },
    };
  } catch (error) {
    return {
      props: {
        recipes: [],
        searchParams: {},
        error: 'Failed to fetch recipes. Please try again.',
      },
    };
  }
};

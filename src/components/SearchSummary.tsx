import { SearchParams } from '@/types';

interface SearchSummaryProps {
  searchParams: SearchParams;
}

export default function SearchSummary({ searchParams }: SearchSummaryProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Search Criteria
      </h2>
      <div className="flex flex-wrap gap-2">
        {searchParams.query && (
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
            Query: {searchParams.query}
          </span>
        )}
        {searchParams.cuisine && (
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            Cuisine: {searchParams.cuisine}
          </span>
        )}
        {searchParams.maxReadyTime && (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            Max Time: {searchParams.maxReadyTime} min
          </span>
        )}
      </div>
    </div>
  );
}

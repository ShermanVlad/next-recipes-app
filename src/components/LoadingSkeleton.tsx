export function RecipesLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
          <div className="w-full h-48 bg-gray-200"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="flex justify-between">
              <div className="h-3 bg-gray-200 rounded w-1/3"></div>
              <div className="h-3 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function RecipeDetailsLoadingSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
      <div className="w-full h-64 sm:h-80 bg-gray-200"></div>
      <div className="p-6 sm:p-8">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="flex gap-4 mb-6">
          <div className="h-4 bg-gray-200 rounded w-24"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
        <div className="space-y-3 mb-8">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-12 bg-gray-200 rounded"></div>
          ))}
        </div>
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex">
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-4"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
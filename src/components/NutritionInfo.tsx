import { Nutrition } from '@/types';

interface NutritionInfoProps {
  nutrition?: Nutrition;
}

export default function NutritionInfo({ nutrition }: NutritionInfoProps) {
  if (!nutrition || !nutrition.nutrients) {
    return null;
  }

  const importantNutrients = nutrition.nutrients.filter((nutrient) =>
    ['Calories', 'Protein', 'Fat', 'Carbohydrates'].includes(nutrient.name)
  );

  if (importantNutrients.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Nutrition Information
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {importantNutrients.map((nutrient) => (
          <div
            key={nutrient.name}
            className="text-center p-3 bg-gray-50 rounded-lg"
          >
            <div className="text-lg font-semibold text-gray-800">
              {Math.round(nutrient.amount)}
            </div>
            <div className="text-sm text-gray-600">
              {nutrient.name}
            </div>
            <div className="text-xs text-gray-500">
              {nutrient.unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
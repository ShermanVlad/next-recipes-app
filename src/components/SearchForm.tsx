import { useState, useEffect } from 'react';
import { SearchFormData } from '@/types';
import { MOCK_CUISINES } from '@/data/mockData';

interface SearchFormProps {
  onSubmit: (formData: SearchFormData) => void;
  isLoading?: boolean;
}

export default function SearchForm({
  onSubmit,
  isLoading = false,
}: SearchFormProps) {
  const [formData, setFormData] = useState<SearchFormData>({
    query: '',
    cuisine: '',
    maxReadyTime: '',
  });
  const [cuisineOptions, setCuisineOptions] = useState<
    { value: string; label: string }[]
  >([{ value: '', label: 'Loading cuisines...' }]);
  const [isLoadingCuisines, setIsLoadingCuisines] = useState(true);

  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        const cuisines = MOCK_CUISINES;
        const options = [
          { value: '', label: 'Select Cuisine' },
          ...cuisines.map((cuisine) => ({
            value: cuisine,
            label: cuisine.charAt(0).toUpperCase() + cuisine.slice(1),
          })),
        ];
        setCuisineOptions(options);
      } catch (error) {
        setCuisineOptions([
          { value: '', label: 'Select Cuisine' },
          { value: 'italian', label: 'Italian' },
          { value: 'mexican', label: 'Mexican' },
          { value: 'chinese', label: 'Chinese' },
          { value: 'indian', label: 'Indian' },
          { value: 'french', label: 'French' },
          { value: 'japanese', label: 'Japanese' },
          { value: 'thai', label: 'Thai' },
          { value: 'mediterranean', label: 'Mediterranean' },
          { value: 'american', label: 'American' },
        ]);
      } finally {
        setIsLoadingCuisines(false);
      }
    };

    fetchCuisines();
  }, []);

  const isFormValid =
    formData.query || formData.cuisine || formData.maxReadyTime;

  const handleInputChange = (field: keyof SearchFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="query"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          What would you like to cook?
        </label>
        <input
          type="text"
          id="query"
          value={formData.query}
          onChange={(e) => handleInputChange('query', e.target.value)}
          placeholder="e.g., pasta, chicken, vegetarian..."
          className="w-full text-gray-700 text-sm px-4 py-3 border border-gray-300 rounded-lg transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="cuisine"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Cuisine Type
        </label>
        <select
          id="cuisine"
          value={formData.cuisine}
          onChange={(e) => handleInputChange('cuisine', e.target.value)}
          disabled={isLoadingCuisines}
          className="w-full text-gray-700 text-sm px-4 py-3 border border-gray-300 rounded-lg transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          {cuisineOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="maxReadyTime"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Maximum Preparation Time (minutes)
        </label>
        <input
          type="number"
          id="maxReadyTime"
          value={formData.maxReadyTime}
          onChange={(e) => handleInputChange('maxReadyTime', e.target.value)}
          placeholder="e.g., 30"
          min="1"
          max="180"
          className="w-full text-gray-700 text-sm px-4 py-3 border border-gray-300 rounded-lg transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={!isFormValid || isLoadingCuisines || isLoading}
        className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
          isFormValid && !isLoadingCuisines && !isLoading
            ? 'bg-orange-500 hover:bg-orange-600 transform hover:scale-105'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        {isLoadingCuisines
          ? 'Loading...'
          : isLoading
            ? 'Searching...'
            : 'Find Recipes'}
      </button>
    </form>
  );
}

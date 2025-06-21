import { useRouter } from 'next/router';
import { SearchFormData } from '@/types';
import { SearchForm } from '@/components';

export default function SearchPage() {
  const router = useRouter();

  const handleSubmit = (formData: SearchFormData) => {
    const searchParams = new URLSearchParams();
    if (formData.query) searchParams.append('query', formData.query);
    if (formData.cuisine) searchParams.append('cuisine', formData.cuisine);
    if (formData.maxReadyTime)
      searchParams.append('maxReadyTime', formData.maxReadyTime);

    router.push(`/recipes?${searchParams.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Recipe Finder
          </h1>
          <p className="text-gray-600">
            Discover delicious recipes tailored to your preferences
          </p>
        </div>

        <SearchForm onSubmit={handleSubmit} />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Fill in at least one field to start searching
          </p>
        </div>
      </div>
    </div>
  );
}

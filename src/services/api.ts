import axios, { AxiosResponse } from 'axios';
import { Recipe, RecipeDetails, SearchParams } from '@/types';

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_SPOONACULAR_BASE_URL;

interface CacheEntry {
  data: any;
  timestamp: number;
}

const cache = new Map<string, CacheEntry>();
const CACHE_DURATION = 60 * 1000;

function getCacheKey(endpoint: string, params: any): string {
  return `${endpoint}:${JSON.stringify(params)}`;
}

function getFromCache(key: string): any | null {
  const entry = cache.get(key);
  if (!entry) return null;
  
  const now = Date.now();
  if (now - entry.timestamp > CACHE_DURATION) {
    cache.delete(key);
    return null;
  }
  
  return entry.data;
}

function setCache(key: string, data: any): void {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
}

if (!API_KEY || !BASE_URL) {
  throw new Error(
    'Missing Spoonacular API key or base URL in environment variables'
  );
}

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  params: {
    apiKey: API_KEY,
  },
});

apiClient.interceptors.request.use(
  (config) => {
    console.log(`Making request to: ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export async function searchRecipes(params: SearchParams): Promise<Recipe[]> {
  const searchParams: any = {
    number: 100,
  };
  
  if (params.query) searchParams.query = params.query;
  if (params.cuisine) searchParams.cuisine = params.cuisine;
  if (params.maxReadyTime) searchParams.maxReadyTime = params.maxReadyTime;
  
  const cacheKey = getCacheKey('complexSearch', searchParams);
  const cachedData = getFromCache(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }
  
  try {
    const response: AxiosResponse = await apiClient.get('/complexSearch', {
      params: searchParams,
    });
    
    const recipes = response.data.results || [];
    setCache(cacheKey, recipes);
    
    return recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw new Error('Failed to fetch recipes');
  }
}

export async function getRecipeDetails(id: number): Promise<RecipeDetails> {
  const cacheKey = getCacheKey('recipeDetails', { id });
  const cachedData = getFromCache(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }
  
  try {
    const response: AxiosResponse = await apiClient.get(`/${id}/information`);
    
    const recipe = response.data;
    setCache(cacheKey, recipe);
    
    return recipe;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw new Error('Failed to fetch recipe details');
  }
}

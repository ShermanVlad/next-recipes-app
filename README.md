# Recipe Finder App

A modern, responsive recipe discovery application built with Next.js, TypeScript, and Tailwind CSS. Search for recipes by ingredients, cuisine type, and preparation time using the Spoonacular API with a clean, component-based architecture.

## Features

- **Search Page**: Beautiful home page with search form
  - Recipe query input with smart validation
  - Cuisine type dropdown with 27+ options from mock data
  - Maximum preparation time filter
  - Form validation requiring at least one field

- **Recipes Page**: Display search results with server-side rendering
  - Responsive grid layout with recipe cards
  - Search criteria summary with visual tags
  - Loading states with Suspense and skeleton components
  - Empty state handling with call-to-action

- **Recipe Details Page**: Comprehensive recipe information
  - Recipe title, image, and metadata
  - Preparation time, servings, and cuisine information
  - Ingredients list with visual indicators
  - Step-by-step instructions with numbered steps
  - Nutrition information (calories, protein, fat, carbs)
  - Responsive design for all screen sizes

- **Technical Features**:
  - Server-side rendering (SSR) for better SEO and performance
  - In-memory caching with 1-minute expiration for API responses
  - Component-based architecture for maintainability
  - Mock data for cuisines (no API calls needed)
  - Error handling and loading states throughout
  - Responsive design with Tailwind CSS
  - TypeScript for type safety
  - ESLint and Prettier for code quality

## Tech Stack

- **Framework**: Next.js 15.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **API**: Spoonacular Food API
- **State Management**: React hooks
- **Code Quality**: ESLint, Prettier

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Spoonacular API key (free account)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd next-recipes-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

1. Sign up for a free account at [Spoonacular API](https://spoonacular.com/food-api/docs#Authentication)
2. Get your API key from the dashboard
3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SPOONACULAR_API_KEY=your_api_key_here
NEXT_PUBLIC_SPOONACULAR_BASE_URL=your_api_url
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
src/
├── components/                 # Reusable UI components
│   ├── index.ts              # Component exports
│   ├── SearchForm.tsx        # Search form with validation
│   ├── PageHeader.tsx        # Page navigation header
│   ├── ErrorDisplay.tsx      # Error handling component
│   ├── RecipeCard.tsx        # Individual recipe card
│   ├── RecipesGrid.tsx       # Recipes grid with empty state
│   ├── SearchSummary.tsx     # Search criteria display
│   ├── RecipeStats.tsx       # Recipe metadata display
│   ├── IngredientsList.tsx   # Ingredients list component
│   ├── InstructionsList.tsx  # Step-by-step instructions
│   ├── NutritionInfo.tsx     # Nutrition information
│   └── LoadingSkeleton.tsx   # Loading state components
├── data/
│   └── mockData.ts           # Mock cuisine data
├── pages/                    # Next.js pages
│   ├── index.tsx            # Search page (home)
│   ├── recipes/
│   │   ├── index.tsx        # Recipes listing page
│   │   └── [id].tsx         # Recipe details page
│   ├── _app.tsx             # App wrapper
│   └── _document.tsx        # Document wrapper
├── services/
│   └── api.ts               # API service with caching
├── types/
│   └── index.ts             # TypeScript type definitions
└── styles/
    └── globals.css          # Global styles
```

## Component Architecture

### Form Components
- **SearchForm**: Handles search input with validation and cuisine dropdown

### Layout Components
- **PageHeader**: Consistent navigation header across pages
- **ErrorDisplay**: Standardized error handling and display

### Recipe Components
- **RecipeCard**: Individual recipe display with hover effects
- **RecipesGrid**: Grid layout with empty state handling
- **SearchSummary**: Visual display of search criteria

### Recipe Details Components
- **RecipeStats**: Recipe metadata (time, servings, cuisine)
- **IngredientsList**: Ingredients display with visual indicators
- **InstructionsList**: Step-by-step instructions with numbering
- **NutritionInfo**: Nutrition data in card format

### Loading Components
- **LoadingSkeleton**: Skeleton loading states for recipes and details

## API Integration

The app integrates with the Spoonacular Food API with intelligent caching:

### API Endpoints Used

1. **Complex Search**: 
   - URL: `https://api.spoonacular.com/recipes/complexSearch`
   - Parameters: `query`, `cuisine`, `maxReadyTime`, `apiKey`
   - Cached for 1 minute

2. **Recipe Information**:
   - URL: `https://api.spoonacular.com/recipes/{id}/information`
   - Parameters: `apiKey`
   - Cached for 1 minute

### Mock Data

- **Cuisines**: 27 cuisine types available without API calls
- **Fallback**: Graceful fallback to mock data if API fails

## Caching Strategy

- **In-Memory Cache**: 1-minute cache for API responses
- **Cache Keys**: Based on endpoint and parameters
- **Automatic Expiration**: Cache entries expire after 1 minute
- **Server-Side Rendering**: Pre-rendered pages for better performance

## Features in Detail

### Search Functionality

- **Query Input**: Search for recipes by ingredients, dish names, or keywords
- **Cuisine Filter**: 27 cuisine types from mock data (African, Asian, American, etc.)
- **Time Filter**: Set maximum preparation time in minutes (1-180)
- **Form Validation**: At least one field must be filled to enable search
- **Real-time Validation**: Button state updates as user types

### Recipe Display

- **Grid Layout**: Responsive grid (1-4 columns based on screen size)
- **Recipe Cards**: Display image, title, preparation time, and servings
- **Hover Effects**: Smooth transitions and scale effects
- **Loading States**: Skeleton loading for better UX
- **Empty State**: Helpful message when no recipes found

### Recipe Details

- **Comprehensive Information**: All recipe data from API
- **Responsive Images**: Optimized image display
- **Structured Data**: Ingredients, instructions, and nutrition
- **Visual Hierarchy**: Clear section organization
- **Error Handling**: Graceful error states with retry options

## Code Quality

- **ESLint**: Code linting with Next.js and Prettier integration
- **Prettier**: Automatic code formatting
- **TypeScript**: Type safety throughout the application
- **Component Architecture**: Modular, reusable components
- **Error Boundaries**: Proper error handling and user feedback

## Performance Optimizations

- **Server-Side Rendering**: Pre-rendered pages for better SEO
- **API Caching**: Reduced API calls with intelligent caching
- **Component Splitting**: Smaller, focused components
- **Image Optimization**: Responsive images with proper sizing
- **Code Splitting**: Automatic code splitting by Next.js

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

```bash
npm run build
npm run start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting: `npm run lint && npm run format`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions:
- Check the [Spoonacular API documentation](https://spoonacular.com/food-api/docs)
- Review the Next.js documentation
- Open an issue in the repository

## Acknowledgments

- [Spoonacular](https://spoonacular.com/) for the comprehensive recipe API
- [Next.js](https://nextjs.org/) for the excellent React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

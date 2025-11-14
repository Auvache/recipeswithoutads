// This file is currently not used as the search functionality
// is implemented directly in the Search.astro component.
//
// If you want to extract the search logic into a separate module,
// you can use this structure:

export interface SearchableRecipe {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  ingredients: string[];
}

export async function initializeSearch(recipes: SearchableRecipe[]) {
  // Lazy load Fuse.js
  const Fuse = (await import('fuse.js')).default;

  return new Fuse(recipes, {
    keys: ['title', 'tags', 'ingredients', 'description'],
    threshold: 0.3,
    ignoreLocation: true
  });
}

export function filterRecipes(
  query: string,
  fuseInstance: any,
  allRecipes: SearchableRecipe[]
): SearchableRecipe[] {
  if (!query.trim()) {
    return allRecipes;
  }

  const results = fuseInstance.search(query);
  return results.map((result: any) => result.item);
}

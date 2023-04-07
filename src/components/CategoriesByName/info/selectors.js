export const getFullCategoryList = state => state.outerRecipes.categoryList;
// ------------------ Recipes by Category with LIMIT ------------------
// ---- Limit MUST BE 4 or 12
// ---- returns an Array of Objects with 4 or 12 recipes by requested category
// ---- As an argument you HAVE TO send an Object with category and limit
// ---- Example: const params = {category: 'beef', limit: 4}
// ---- Use with function "getLimitedRecipesByCategory(params)"
export const getLimitedRecipes = state =>
  state.outerRecipes.limitedRecipesByCategory;

// ------------------ ALL Recipes by Category without LIMIT ------------------
// ---- returns an Array of Objects with all recipes by requested category
// ---- As an argument you HAVE TO send a category name (String)
// ---- Example: const category = 'beef';
// ---- Use with function "getAllRecipesByCategory(category)"
export const getAllRecipes = state => state.outerRecipes.allRecipesByCategory;
// ------------------ Additional ------------------
export const getIsCategoryFetching = state =>
  state.outerRecipes.isCategoryFetching;

export const getIsError = state => state.outerRecipes.isError;

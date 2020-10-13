import { recipes } from '../data/recipes';
import { Recipe } from '../interfaces/interfaces';

/**
 * Find recipes by a search term
 * @param search Search term
 */
export const findRecipes = (search: string): Recipe[] => {
  return (
    recipes.filter((recipe) => recipe.title.toLowerCase().includes(search)) ??
    null
  );
};

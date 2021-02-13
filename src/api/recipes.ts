import { recipes } from '../data/recipes';
import { Recipe } from '../interfaces/interfaces';

/**
 * Find recipes by a search term
 * @param search Search term
 */
export const findRecipes = (search: string): Recipe[] => {
    return (
        recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(search),
        ) ?? null
    );
};

/**
 * Find recipes by it's id
 * @param id Recipe id
 */
export const getRecipeById = (id: string): Recipe | undefined => {
    return recipes.find((recipe) => recipe.id === id);
};

/**
 * Returns all recipes
 */
export const getAllRecipes = (): Recipe[] => {
    return recipes;
};

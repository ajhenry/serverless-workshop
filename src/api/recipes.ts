import { recipes } from '../data/recipes';
import { Recipe } from '../interfaces/interfaces';
import Fuse from 'fuse.js';
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

/**
 * Finds related recipes for a given recipe
 * @param recipe Recipe to find related to
 */
export const findRelated = (recipe: Recipe): Recipe[] => {
    const title = recipe.title;
    const recipes = getAllRecipes();
    const options = {
        includeScore: false,
        keys: ['title', 'steps'],
    };

    const fuse = new Fuse(recipes, options);
    const result = fuse.search(recipe.title);

    return result
        .map((result) => result.item)
        .filter((recipe) => recipe.title !== title);
};

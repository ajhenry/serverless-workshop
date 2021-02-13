import { Ingredient, Substitution, Recipe } from '../interfaces/interfaces';
import { ingredients, substitutions } from '../data/ingredients';

/**
 * Find a single ingredient
 * @param name Name of ingredient
 */
export const findIngredientByName = (name: string): Ingredient | null => {
    return ingredients.find((ingredient) => ingredient.name === name) ?? null;
};

/**
 * Find a single ingredient
 * @param name Name of ingredient
 */
export const findIngredientById = (id: string): Ingredient | null => {
    return ingredients.find((ingredient) => ingredient.id === id) ?? null;
};

/**
 * Fetch all ingredients
 */
export const getAllIngredients = (): Ingredient[] => {
    return ingredients;
};

/**
 * Find ingredients by a search term
 * @param search Search term
 */
export const findIngredients = (search: string): Ingredient[] | null => {
    return (
        ingredients.filter((ingredient) => ingredient.name.includes(search)) ??
        null
    );
};

/**
 * Gets all the substitutions for a given ingredient name
 * @param ingredientName Ingredient to get substitutions for
 */
export const findSubstitutions = (
    ingredientName: string,
): Ingredient['substitutions'] => {
    // Search for substitutions in the sub array
    const subs = substitutions.filter(
        (sub) =>
            sub.ingredient1 === ingredientName ||
            sub.ingredient2 === ingredientName,
    );

    const newIngredients = subs.map((sub) => {
        // Find the one that isn't the ingredient we're searching for
        const search =
            sub.ingredient1 === ingredientName
                ? sub.ingredient2
                : sub.ingredient1;

        // Find the ingredient by the name of it
        const ingredient = findIngredientByName(search)!;

        // Couldn't find it for some reason :shrug:
        if (!ingredient) return null;

        return {
            ...ingredient,
            subAmount: sub.subAmount,
            baseAmount: sub.baseAmount,
            unit: sub.unit,
        };
    });

    // Filter out any nulls from above
    return newIngredients.filter((i) =>
        Boolean(i),
    ) as Ingredient['substitutions'];
};

/**
 * Increase a recipe by a multiplier
 * @param ingredients List of ingredients to convert
 * @param multiplier Amount to multiply by
 */
export const convertAmounts = (
    ingredients: Recipe['ingredients'],
    multiplier: number,
) => {
    return ingredients.map((ingredient) => ({
        ...ingredient,
        amount: ingredient.amount * multiplier,
    }));
};

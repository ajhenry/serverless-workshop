import { Ingredient, Substitution } from '../interfaces/interfaces';
import { ingredients, substitutions } from '../data/ingredients';

/**
 * Find a single ingredient
 * @param name Name of ingredient
 */
export const findIngredient = (name: string): Ingredient | null => {
  return ingredients.find((ingredient) => ingredient.name === name) ?? null;
};

/**
 * Find ingredients by a search term
 * @param search Search term
 */
export const findIngredients = (search: string): Ingredient[] | null => {
  return (
    ingredients.filter((ingredient) => ingredient.name.includes(search)) ?? null
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
      sub.ingredient1 === ingredientName || sub.ingredient2 === ingredientName,
  );

  const newIngredients = subs.map((sub) => {
    // Find the one that isn't the ingredient we're searching for
    const search =
      sub.ingredient1 === ingredientName ? sub.ingredient2 : sub.ingredient1;

    // Find the ingredient by the name of it
    const ingredient = findIngredient(search)!;

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
  return newIngredients.filter((i) => Boolean(i)) as Ingredient['substitutions'];
};

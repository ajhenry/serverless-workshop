import { Ingredient, Recipe } from '../interfaces/interfaces';

import { v4 as uuidv4 } from 'uuid';
import { ingredients } from '../data/ingredients';
import { recipes } from '../data/recipes';

/**
 * Generates a list of ingredients from a list of recipes
 * @param recipes List of recipes
 */
export const generateIngredients = (recipes: Recipe[]): Ingredient[] => {
  const ingredientList: Ingredient[] = [];
  const ingredients = {};

  for (const recipe of recipes) {
    for (const ingredient of recipe.ingredients) {
      if (!ingredients.hasOwnProperty(ingredient.name)) {
        const uuid = uuidv4();
        ingredients[ingredient.name] = uuid;

        ingredientList.push({
          name: ingredient.name,
          id: uuid,
        });
      }
    }
  }

  return ingredientList;
};

console.log(JSON.stringify(generateIngredients(recipes), null, 2));

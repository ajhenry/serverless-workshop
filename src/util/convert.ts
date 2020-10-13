import convert from 'convert-units';
import { Ingredient, Recipe, Unit } from '../interfaces/interfaces';

/**
 * Converts an ingredient list to metric
 * @param ingredients Ingredient list from a recipe
 */
export const convertToMetric = (
  ingredients: Recipe['ingredients'],
): Recipe['ingredients'] => {
  var imperialUnits = convert()
    .list('mass')
    .filter(function (unit) {
      return unit.system == 'imperial';
    });

  console.log(imperialUnits);

  return ingredients.map((ingredient) => {
    const { amount, unit } = ingredient;

    try {
      const newUnit = convert(amount)
        .from(unit as any)
        .toBest({ exclude: imperialUnits as any });

      return {
        ...ingredient,
        amount: newUnit.val,
        unit: newUnit.unit as Unit,
      };
    } catch (e) {
        console.log(e)
      return ingredient;
    }
  });
};

import { recipes } from '../data/recipes';
import {
  findIngredient,
  findIngredients,
  findSubstitutions,
} from '../api/ingredients';
import { findRecipes } from '../api/recipes';
import { convertToMetric } from '../util/convert';

const resolvers = {
  Query: {
    hello: (obj, args, context, info) => {
      return 'world';
    },
    recipes: (obj, args, context, info) => {
      const { search } = args;

      return findRecipes(search);
    },
    ingredient: (obj, args, context, info) => {
      const { id } = args;

      return findIngredient(id);
    },
    ingredients: (obj, args, context, info) => {
      const { search } = args;

      return findIngredients(search);
    },
  },
  Ingredient: {
    substitutions: (obj, args, context, info) => {
      // Use the data that's already in the ingredient
      const { name } = obj;

      return findSubstitutions(name);
    },
  },
  Recipe: {
    ingredients: (obj, args, context, info) => {
      // Use the data that's already in the ingredient
      const { metric } = args;
      const { ingredients } = obj;

      console.log(metric);
      console.log(ingredients);

      if (metric) return convertToMetric(ingredients);

      return ingredients;
    },
  },
};

export default resolvers;

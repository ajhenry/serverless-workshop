import {
    findIngredientById,
    findIngredients,
    findSubstitutions,
    getAllIngredients,
    convertAmounts,
} from '../api/ingredients';
import { findRecipes, getAllRecipes, getRecipeById } from '../api/recipes';
import { Recipe } from '../interfaces/interfaces';
import { ingredients } from '../data/ingredients';

const resolvers = {
    Query: {
        hello: (obj, args, context, info) => {
            return 'world';
        },
        recipes: (obj, args, context, info) => {
            const { search, id } = args;

            if (search) {
                return findRecipes(search);
            }

            if (id) {
                return getRecipeById(id);
            }

            return getAllRecipes();
        },
        recipe: (obj, args, context, info) => {
            const { id } = args;

            return getRecipeById(id);
        },
        ingredient: (obj, args, context, info) => {
            const { id } = args;

            return findIngredientById(id);
        },
        ingredients: (obj, args, context, info) => {
            const { search } = args;

            if (!search) {
                return getAllIngredients();
            }

            return findIngredients(search);
        },
    },
    Mutation: {
        updateRecipe: (obj, args, context, info) => {
            const { id, data } = args;

            const recipe = getRecipeById(id);

            return { ...recipe, ...data };
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
        ingredients: (obj: Recipe, args, context, info) => {
            

            const { multiply } = args;

            if (!multiply) return obj.ingredients;


            const newIngredients = convertAmounts(obj.ingredients, multiply);


            return newIngredients;
        },
    },
};

export default resolvers;

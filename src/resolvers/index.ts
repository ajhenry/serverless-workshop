import {
    convertAmounts, findIngredientById,
    findIngredients,
    findSubstitutions,
    getAllIngredients
} from '../api/ingredients';
import {
    findRecipes,
    findRelated,
    getAllRecipes,
    getRecipeById
} from '../api/recipes';
import { Recipe } from '../interfaces/interfaces';

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
            const { id, data, replace } = args;

            if (replace) {
                return {
                    id,
                    steps: [],
                    description: '',
                    ingredients: [],
                    ...data,
                };
            }

            const recipe = getRecipeById(id);

            return { ...recipe, ...data };
        },
        deleteRecipe: (obj, args, context, info) => {
            const { id } = args;

            const recipe = getRecipeById(id);

            return recipe;
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
        related: (recipe: Recipe, args, context, info) => {
            const { limit } = args;
            const related = findRelated(recipe);

            if (limit) {
                return related.slice(0, limit);
            }

            return related;
        },
    },
};

export default resolvers;

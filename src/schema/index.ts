import gql from 'graphql-tag';

const typeDefs = gql`
    enum Unit {
        unit
        oz
        g
        fl_oz
        cup
        tbs
        tsp
        TBS
        tbsp
        dash
        pinch
        gal
        lb
        pt
    }

    type NutritionFacts {
        id: ID!
    }

    type Ingredient {
        id: ID!
        name: String!
        nutrition: NutritionFacts
        substitutions: [Ingredient]
    }

    extend type Ingredient {
        amount: Float
        unit: Unit
    }

    extend type Ingredient {
        subAmount: Float
        baseAmount: Float
    }

    type Duration {
        prep: Int
        total: Int
    }

    type Recipe {
        id: ID!
        title: String!
        description: String!
        ingredients(multiply: Int): [Ingredient]!
        steps: [String]!
        nutrition: NutritionFacts
        duration: Duration
        yield: Int
    }

    type Query {
        hello(name: String): String!
        recipe(id: String): Recipe
        recipes(search: String): [Recipe]!
        ingredient(id: String): Ingredient
        ingredients(search: String): [Ingredient]!
    }

    input IngredientInput {
        id: ID!
    }

    input DurationInput {
        prep: Int
        total: Int
    }

    input RecipeInput {
        title: String
        description: String
        ingredients: [ID]
        steps: [String]
        nutrition: ID
        duration: DurationInput
        yield: Int
    }

    type Mutation {
        updateRecipe(id: ID, data: RecipeInput): Recipe
    }
`;

export default typeDefs;

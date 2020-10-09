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
    title: String!
    description: String!
    ingredients: [Ingredient]!
    steps: [String]!
    nutrition: NutritionFacts
    duration: Duration
    yield: Int
  }

  type Query {
    hello(name: String): String!
    recipe(search: String): [Recipe]!
    ingredient(id: String): Ingredient
    ingredients(search: String): [Ingredient]
  }
`;

export default typeDefs;

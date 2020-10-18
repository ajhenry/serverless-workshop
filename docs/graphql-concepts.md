# GraphQL Concepts

These are the basic properties of GraphQL and how to use it effectively

The [Official Docs](https://graphql.org/learn/) have a pretty good tutorial too

The variant of graphql we are using is [Apollo](https://www.apollographql.com/docs/tutorial/introduction/) based, this means there's extra features that aren't in the graphql spec yet

## Types

For our workshop, we are using Recipes to show the power of GQL

A type can be thought of a contract for how our data fits a model, like interfaces in TypeScript or fields in a class in Java

There are 2 main types in our recipe API

### Ingredients

```graphql
type Ingredient {
  id: ID!
  name: String!
  nutrition: NutritionFacts
  substitutions: [Ingredient]
}
```

### Recipes

```graphql
type Recipe {
  title: String!
  description: String!
  ingredients: [Ingredient]!
  steps: [String]!
  nutrition: NutritionFacts
  duration: Duration
  yield: Int
}
```

Each of these types also has additional smaller types like `NutritionFacts` or `Duration`

Types can also reference themselves, for example, an Ingredient can have a list of substitutions which are _also_ Ingredients

We aren't going to dive into the syntax of a graphql schema in this workshop, that information can be found in the tutorials above

## Queries

Queries are functions within graphql that return types

```graphql
type Query {
  hello(name: String): String!
  recipes(search: String): [Recipe]!
  ingredient(id: String): Ingredient
  ingredients(search: String): [Ingredient]!
}
```

Here is a special type type `Query`, this allows us to create functions that return our data in the format we specified with our types

## Mutations

TODO

## Example Queries and Output

The powerful of GQL comes from its ability to have a contract that can be followed by any client also using GQL

Within the Playground, you can view the schema and return types of a GraphQL endpoint

![Playground Schema Image](/resources/schema.png)

Queries are also special in that you only get the data fields that you ask for and nothing more

Here are some examples of queries that can be used as a starting point

### Finding Ingredients by name

```graphql
query Ingredient {
  ingredients(search: "chicken") {
    name
  }
}
```

Notice the following

1. We declared we are issuing a query with the `query` keyword
2. We added a parameter `search` with the string `chicken`
3. We only asked for the name of the ingredient

Result

<p class="codepen" data-height="865" data-theme-id="light" data-default-tab="js,result" data-user="ajhenry" data-slug-hash="rNLeaZO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="rNLeaZO">
  <span>See the Pen <a href="https://codepen.io/ajhenry/pen/rNLeaZO">
  rNLeaZO</a> by Andrew (<a href="https://codepen.io/ajhenry">@ajhenry</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```json
{
  "data": {
    "ingredients": [
      {
        "name": "chicken breast"
      },
      {
        "name": "chicken stock"
      },
      {
        "name": "chicken thigh"
      },
      {
        "name": "chicken broth"
      }
    ]
  }
}
```

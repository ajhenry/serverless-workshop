import { Ingredient, Recipe, Substitution } from '../interfaces/interfaces';
import { basename } from 'path';

export const ingredients: Ingredient[] = [
  {
    id: '2ee11407-4a1f-4b07-81ca-f1f853f77d65',
    name: 'chicken breast',
  },
  {
    id: 'a68fca08-5368-4af4-b1df-7d9123c289c0',
    name: 'honey',
  },
  {
    id: '159a5880-cb1f-47bd-bcb4-b531d8b4c360',
    name: 'corn-syrup',
  },
];

export const substitutions: Substitution[] = [
  {
    ingredient1: 'honey',
    ingredient2: 'corn-syrup',
    baseAmount: 1,
    subAmount: 1,
    unit: 'cup',
  },
];

export const recipes: Recipe[] = [
  {
    title: 'Honey Garlic Glazed Salmon',
    description: 'Say hello to your new favorite salmon dish!',
    ingredients: [
      {
        name: 'chicken breast',
        unit: 'unit',
        amount: 3,
      },
      {
        name: 'honey',
        unit: 'cup',
        amount: 1 / 3,
      },
      {
        name: 'soy sauce',
        unit: 'cup',
        amount: 1 / 4,
      },
      {
        name: 'red pepper flakes',
        unit: 'tsp',
        amount: 1,
      },
      {
        name: 'lemon juice',
        unit: 'tbsp',
        amount: 2,
      },
      {
        name: 'extra-virgin olive oil',
        unit: 'tbsp',
        amount: 3,
      },
      {
        name: 'salmon fillet',
        unit: 'unit',
        amount: 4,
      },
      {
        name: 'lemon',
        unit: 'unit',
        amount: 1,
      },
      {
        name: 'garlic',
        unit: 'unit',
        amount: 3,
      },
    ],
    steps: [
      'In a medium bowl, whisk together honey, soy sauce, lemon juice and red pepper flakes.',
      'In a large skillet over medium-high heat, heat two tablespoons oil. When oil is hot but not smoking, add salmon skin-side up and season with salt and pepper. Cook salmon until deeply golden, about 6 minutes, then flip over and add remaining tablespoon of oil.',
      'Add garlic to the skillet and cook until fragrant, 1 minute. Add the honey mixture and sliced lemons and cook until sauce is reduced by about 1/3. Baste salmon with the sauce.',
      'Garnish with sliced lemon and serve.',
    ],
    duration: {
      prep: 5,
      total: 20,
    },
    yield: 4,
  },
];

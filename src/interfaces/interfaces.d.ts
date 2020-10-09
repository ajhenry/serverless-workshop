export type Unit =
  | 'unit'
  | 'oz'
  | 'g'
  | 'fl oz'
  | 'cup'
  | 'tbs'
  | 'tsp'
  | 'TBS'
  | 'tbsp'
  | 'dash'
  | 'pinch'
  | 'gal'
  | 'oz';

export type Substitution = {
  ingredient1: string;
  ingredient2: string;
  baseAmount: number;
  subAmount: number;
  unit: Unit;
};

export interface Ingredient {
  id: string;
  name: string;
  nutrition?: NutritionFacts;
  substitutions?: (Pick<Substitution, 'baseAmount' | 'subAmount' | 'unit'> &
    Ingredient)[];
}

export interface NutritionFacts {}

export interface Recipe {
  title: string;
  description: string;
  ingredients: (Pick<Ingredient, 'name'> & { amount: number; unit: Unit })[];
  steps: string[];
  nutrition?: NutritionFacts;
  duration: {
    prep: number;
    total: number;
  };
  yield: number;
}

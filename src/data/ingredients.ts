import { Ingredient, Recipe, Substitution } from '../interfaces/interfaces';
import { basename } from 'path';

export const ingredients: Ingredient[] = [
  {
    id: '159a5880-cb1f-47bd-bcb4-b531d8b4c360',
    name: 'corn-syrup',
  },
  {
    name: 'chicken breast',
    id: '018bd5b2-c2ed-4a1c-b053-0f0a4867e279',
  },
  {
    name: 'honey',
    id: 'a7031408-5737-455c-9d1b-35c5faf948df',
  },
  {
    name: 'soy sauce',
    id: 'cbd1ab47-b80b-4015-8e91-a2c882b0562f',
  },
  {
    name: 'red pepper flakes',
    id: '29d28d84-f44d-4918-b857-a8f23f277da9',
  },
  {
    name: 'lemon juice',
    id: '9ab25b0f-453f-4182-ab10-847641397111',
  },
  {
    name: 'extra-virgin olive oil',
    id: '5f18e402-7145-48d7-86f0-bd4ee0e3e421',
  },
  {
    name: 'salmon fillet',
    id: '3b3461ee-a697-4505-a0ce-7d6b856d5409',
  },
  {
    name: 'lemon',
    id: '8d74c083-1f75-4ad7-b0d9-91b21d63f5fb',
  },
  {
    name: 'garlic',
    id: '06572149-ea1e-4196-967e-f66232caa715',
  },
  {
    name: 'chicken stock',
    id: '1adc4392-2261-4409-bf7d-09750b9692cd',
  },
  {
    name: 'dijon mustard',
    id: 'ad04c499-feeb-4371-a96a-31d76918165d',
  },
  {
    name: 'kosher salt',
    id: '0e45852a-4782-4ece-b4fe-ef114554a0d0',
  },
  {
    name: 'black pepper',
    id: 'cae2f79a-3867-40d1-be9f-86ec14b0cf4c',
  },
  {
    name: 'chicken thigh',
    id: '15c3171b-b03c-4ce1-9f3c-c36d16a986c9',
  },
  {
    name: 'yukon gold potatoes',
    id: 'c3c2e01e-7732-4135-a747-00e0eca10f72',
  },
  {
    name: 'peas',
    id: 'd6419515-ec87-4d7c-90fc-8330d4e9391d',
  },
  {
    name: 'lemon zest',
    id: 'ad31fd0f-d690-4df8-818b-60afe4bb1a25',
  },
  {
    name: 'olive oil',
    id: 'bad25803-2616-4270-8fd0-3a2e58a91f43',
  },
  {
    name: 'strip steak',
    id: '43143b42-a458-46a6-93ed-5e38fac4efaa',
  },
  {
    name: 'shallot',
    id: '76945c8d-a469-4aa9-b76f-23ec64c4a1f3',
  },
  {
    name: 'white wine',
    id: 'c52119d5-821e-409a-90e2-2d47a5bf6dbe',
  },
  {
    name: 'unsalted butter',
    id: '7206aecc-a655-4e40-9ed7-4a0a9af08a2a',
  },
  {
    name: 'rosemary garlic oven fries',
    id: '4a19a7b6-c568-4472-9739-6b4c81142c2c',
  },
  {
    name: 'zucchini',
    id: '74e4ade2-7ee6-4a1b-9ff0-62895b9425ea',
  },
  {
    name: 'bacon',
    id: 'e75311e4-8ae3-4610-999a-9bc1b3f0bff0',
  },
  {
    name: 'italian seasoning',
    id: 'c282a2ee-198b-494d-8bd2-2c8f61e3d621',
  },
  {
    name: 'five-cheese blend',
    id: '4dd076df-e5ec-4fe5-abe9-cee645ac8d67',
  },
  {
    name: 'grape tomato',
    id: '5ac50f61-a6b1-45d6-a448-7eea0f2b90b4',
  },
  {
    name: 'balsamic vinegar',
    id: '7ea94d38-1d43-4353-8aed-5ebf04ea6893',
  },
  {
    name: 'basil',
    id: 'baf3f82e-ac7b-4ae6-a2c7-4f1e1f589b94',
  },
  {
    name: 'ramen noodles',
    id: '6252b1e7-2fc9-483c-8dcf-0417c1a2a8f2',
  },
  {
    name: 'chicken broth',
    id: '433cd066-2a09-4bcf-98f2-1eb2e840f725',
  },
  {
    name: 'ginger',
    id: '71fbae0c-6bcf-4478-8df9-f9e54f8cbccb',
  },
  {
    name: 'carrot',
    id: '8f358439-82e0-4537-b327-7d2b299d360d',
  },
  {
    name: 'sesame oil',
    id: '5cdd0ed5-6dcb-4080-bd6d-f6b44531688d',
  },
  {
    name: 'egg',
    id: '2392a9e0-ab18-45f2-a5c6-1d72d0090529',
  },
  {
    name: 'scallion',
    id: 'def2c857-b02e-4761-b22c-016108b9b46f',
  },
  {
    name: 'black beans',
    id: 'b06a34a6-b09a-4c43-aaf0-0e7e934a1c7c',
  },
  {
    name: 'plum tomato',
    id: '6fa58907-1616-45c8-8069-8ebcfdd4cae7',
  },
  {
    name: 'red onion',
    id: '947d5156-2553-457b-9be3-f5f8ea6961c9',
  },
  {
    name: 'lime juice',
    id: '4b8479fc-d326-46fc-93da-0580a4326e82',
  },
  {
    name: 'cilantro',
    id: '207fa643-e141-42df-bc31-c3d03fbdff3c',
  },
  {
    name: 'hot sauce',
    id: '7b95f837-ab9c-4880-bc70-e98b006fb87d',
  },
  {
    name: 'mixed spring greens',
    id: '7b2ea8d7-7078-4256-b2dd-fe46654acf94',
  },
  {
    name: 'corn tortilla',
    id: '98ac51cd-75e9-438d-912c-d226b2c7fd03',
  },
  {
    name: 'queso fresco',
    id: '13e9d4f1-c8d5-4816-886f-ee30a01d4dfd',
  },
  {
    name: 'spanish rice',
    id: '7f790b12-7371-4d36-8221-3bba95b7f81d',
  },
  {
    name: 'ground beef',
    id: 'fd692a4a-ca58-411e-befa-00ce587e41c4',
  },
  {
    name: 'taco seasoning',
    id: '79a95ef2-1a1c-4414-a9d0-e8b1dc9fef3f',
  },
  {
    name: 'enchilada sauce',
    id: '565a0185-bf77-4d61-80e6-3be7638d5883',
  },
  {
    name: 'flour tortilla',
    id: '028a7c2a-21ed-403e-be08-4ddd8332d176',
  },
  {
    name: 'cheddar cheese',
    id: 'c64f4cbd-5133-4a33-a88e-87abab5c034d',
  },
  {
    name: 'sour cream',
    id: '05d69b65-215f-4a15-97ef-103bccf82c8e',
  },
  {
    name: 'avocado',
    id: '9d4df946-9a16-4ef9-9f21-e7f785b2bfb7',
  },
  {
    name: 'green onion',
    id: '29cd136b-4b5b-4a89-bc13-b97a2dbadd38',
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

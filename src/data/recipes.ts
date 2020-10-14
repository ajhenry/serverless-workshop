import { Recipe } from '../interfaces/interfaces';

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
  {
    title: 'Crispy Chicken Thighs With Garlic and Rosemary',
    description:
      'Winner, winner, chicken dinner! These skillet-fried thighs are irresistibly crispy, thanks to a flattening technique using a skillet weighted down with soup cans',
    ingredients: [
      {
        name: 'chicken stock',
        amount: 1 / 3,
        unit: 'cup',
      },
      {
        name: 'lemon juice',
        amount: 2,
        unit: 'tbsp',
      },
      {
        name: 'dijon mustard',
        amount: 1,
        unit: 'tbsp',
      },
      {
        name: 'red pepper flakes',
        amount: 1 / 4,
        unit: 'tsp',
      },
      {
        name: 'kosher salt',
        amount: 1,
        unit: 'dash',
      },
      {
        name: 'black pepper',
        amount: 1,
        unit: 'dash',
      },
      {
        name: 'chicken thigh',
        amount: 8,
        unit: 'unit',
      },
      {
        name: 'garlic',
        amount: 8,
        unit: 'unit',
      },
    ],
    steps: [
      'Whisk together stock, lemon juice, mustard, rosemary, and pepper flakes in a bowl. Season with salt.',
      'Heat a 12-inch cast-iron skillet over medium heat until hot, 1 to 2 minutes. Season chicken with salt and pepper. Place, skin sides down, in the skillet. Place a second smaller skillet on top of chicken and weigh it down with soup cans. Cook until the skins are golden brown and crisp, 7 to 9 minutes.',
      'Remove cans and top skillet. Flip chicken and reduce heat to medium-low. Add garlic and cook until the chicken is cooked through, 2 to 3 minutes. Transfer chicken to a platter; reserve skillet. Add stock mixture to reserved skillet. Cook, scraping up any brown bits, until slightly thickened, 1 to 2 minutes. Spoon over chicken.',
    ],
    duration: {
      prep: 0,
      total: 20,
    },
    yield: 4,
  },
  {
    title: 'Strip Steak With Lemon Mashed Potatoes',
    description:
      'This hearty steak dinner is perfect for a quick weeknight dinner.',
    steps: [
      'Preheat oven to 425°F. Place potatoes in a large pot; cover with cold salted water. Bring to a boil, reduce heat, and simmer until tender, 15 to 18 minutes, adding peas during the last 3 minutes of cooking. Drain and return vegetables to the pot. Add lemon zest and juice and 2 tablespoons oil; mash. Season with salt and pepper.',
      'Meanwhile, heat remaining tablespoon oil in a large skillet over medium-high heat. Season steak with salt and pepper. Cook to desired degree of doneness, 3 to 5 minutes per side for medium-rare. Transfer steak to cutting board and let rest 5 minutes before slicing; reserve skillet.',
      'Reduce heat to medium. Add shallots to reserved skillet; cook, stirring occasionally, until tender, 2 to 4 minutes. Add wine and 1/4 cup water. Cook, scraping up any browned bits with a wooden spoon, until liquid is reduced by half, 4 to 6 minutes; remove from heat. Add butter and swirl pan to melt; stir in juices from cutting board. Season with salt and pepper. Serve steak topped with sauce and potatoes alongside.',
    ],
    ingredients: [
      {
        name: 'yukon gold potatoes',
        amount: 1.5,
        unit: 'lb',
        modifier: 'peeled and cut into 2-inch chunks',
      },
      {
        name: 'kosher salt',
        amount: 1,
        unit: 'dash',
      },
      {
        name: 'black pepper',
        amount: 1,
        unit: 'dash',
      },
      {
        name: 'peas',
        amount: 1,
        unit: 'cup',
        modifier: 'fresh or frozen',
      },
      {
        name: 'lemon zest',
        amount: 2,
        unit: 'tsp',
      },
      {
        name: 'lemon juice',
        amount: 2,
        unit: 'tbsp',
      },
      {
        name: 'olive oil',
        amount: 3,
        unit: 'tbsp',
        modifier: 'divided',
      },
      {
        name: 'strip steak',
        amount: 2,
        unit: 'unit',
        modifier: '3/4-inch-thick (about 1 1/2 pounds total)',
      },
      {
        name: 'shallot',
        amount: 2,
        unit: 'unit',
        modifier: 'thinly sliced',
      },
      {
        name: 'white wine',
        amount: 1 / 2,
        unit: 'cup',
        modifier: 'dry',
      },
      {
        name: 'unsalted butter',
        amount: 1.5,
        unit: 'tbsp',
      },
    ],
    duration: {
      prep: 0,
      total: 30,
    },
    yield: 4,
  },
  {
    title: 'Italian Potato Wedge Nachos',
    description:
      'Loaded potato nachos get the Italian treatment with ripe tomatoes, a mozzarella cheese blend, and fresh basil.',
    steps: [
      'Preheat oven to 475°F. Bake rosemary garlic oven fries, zucchini, and bacon in a single layer on a lightly greased baking sheet, stirring once, 15 minutes.',
      'Meanwhile, season chicken breasts with Italian seasoning, and kosher salt and black pepper. Cook in 1 tablespoon olive oil in a medium skillet over medium-high heat until cooked through, 5 to 6 minutes per side; chop. Push potatoes to middle of baking sheet and top with chopped chicken and Italian five-cheese blend. Bake until cheese is melted, 3 to 4 minutes.',
      'Meanwhile, toss together grape tomatoes, garlic, 1 tablespoon olive oil, and balsamic vinegar. Season with kosher salt and black pepper. Spoon tomato mixture and basil over potatoes. Serve immediately.',
    ],
    ingredients: [
      {
        name: 'rosemary garlic oven fries',
        amount: 24,
        unit: 'oz',
        modifier: '1 package frozen',
      },
      {
        name: 'zucchini',
        amount: 1,
        unit: 'unit',
        modifier: 'sliced',
      },
      {
        name: 'bacon',
        amount: 3,
        unit: 'unit',
        modifier: 'chopped',
      },
      {
        name: 'chicken breast',
        amount: 2,
        unit: 'unit',
        modifier: 'boneless, skinless',
      },
      {
        name: 'italian seasoning',
        amount: 1,
        unit: 'tsp',
      },
      {
        name: 'kosher salt',
        amount: 1,
        unit: 'dash',
      },
      {
        name: 'black pepper',
        amount: 1,
        unit: 'dash',
      },
      {
        name: 'olive oil',
        amount: 2,
        unit: 'tbsp',
      },
      {
        name: 'five-cheese blend',
        amount: 1.5,
        unit: 'cup',
        modifier: 'shredded italian variety',
      },
      {
        name: 'garlic',
        amount: 1,
        unit: 'unit',
        modifier: 'chopped',
      },
      {
        name: 'grape tomato',
        amount: 1,
        unit: 'pt',
        modifier: 'halved',
      },
      {
        name: 'balsamic vinegar',
        amount: 2,
        unit: 'tsp',
      },
      {
        name: 'basil',
        amount: 1 / 3,
        unit: 'cup',
        modifier: 'fresh torn',
      },
    ],
    duration: {
      prep: 10,
      total: 30,
    },
    yield: 4,
  },
  {
    title: 'Egg-Drop Noodle Soup',
    description:
      'Use quick-cooking ramen and store-bought chicken broth to get this hearty rendition of the Chinese-restaurant classic on the table in a jiffy. Fortune cookies optional.',
    steps: [
      'In a large pot over high heat, bring 6 cups salted water to a boil. Add noodles and cook for 3 minutes. Drain noodles and set aside. Rinse pot.',
      'In the same pot over medium-high heat, bring chicken broth, ginger, garlic, and soy sauce to a simmer. Add carrots and all but 2 tablespoons scallions, and cook until vegetables are tender, about 3 minutes. Use a slotted spoon to remove ginger and garlic.',
      'In a medium bowl, lightly beat together eggs, sesame oil, and salt. Gently stir broth, then pour seasoned eggs into pot. Let sit undisturbed until eggs are cooked, 40 to 60 seconds. Stir with a wooden spoon to break up eggs. Return noodles to pot and cook for 1 minute. Divide soup among 6 bowls and garnish with remaining scallions. Serve immediately.',
    ],
    ingredients: [
      {
        name: 'kosher salt',
        amount: 0.5,
        unit: 'tsp',
      },
      {
        name: 'ramen noodles',
        amount: 3,
        unit: 'unit',
      },
      {
        name: 'chicken broth',
        amount: 10.5,
        unit: 'cup',
      },
      {
        name: 'ginger',
        amount: 1,
        unit: 'unit',
      },
      {
        name: 'garlic',
        amount: 3,
        unit: 'unit',
        modifier: 'lightly smashed',
      },
      {
        name: 'soy sauce',
        amount: 1,
        unit: 'tbsp',
      },
      {
        name: 'carrot',
        amount: 3,
        unit: 'unit',
        modifier: 'peeled and sliced',
      },
      {
        name: 'sesame oil',
        amount: 1,
        unit: 'tbsp',
      },
      {
        name: 'egg',
        amount: 3,
        unit: 'unit',
        modifier: 'large',
      },
      {
        name: 'scallion',
        amount: 6,
        unit: 'unit',
        modifier: 'small',
      },
    ],
    duration: {
      prep: 10,
      total: 25,
    },
    yield: 6,
  },
  {
    title: 'Huevos Rancheros Salad',
    description:
      'A bright, sunny-side-up fried egg steals the show on this Southwestern salad topped with queso fresco, cilantro, and a citrusy black-bean-and-tomato salsa.',
    steps: [
      'In a medium bowl, gently stir black beans, tomatoes, onion, 1/2 cup oil, lime juice, cilantro, hot sauce, and salt to combine to create a fresh salsa. Set aside. Divide greens among 6 dinner plates and set aside.',
      'With 1 tablespoon olive oil, lightly brush all 6 tortillas and sprinkle lightly with salt to taste. Toast tortillas directly under broiler or over an open flame, 1 minute per side. Cut tortillas into quarters and wrap in foil to keep warm.',
      'Evenly divide all but 1/2 cup of the salsa among the plated greens. Divide remaining oil between 2 large nonstick skillets over medium-high heat. Crack 3 eggs into each pan and reduce heat to medium.',
      'Season eggs with salt and pepper to taste, and cook, lightly splashing tops of eggs with pan oil, until whites are opaque and yolks are deep golden, about 3 minutes. Transfer 1 egg onto each plate. Sprinkle eggs with queso fresco and remaining salsa; garnish with cilantro. Serve salads immediately with reserved tortillas.',
    ],
    ingredients: [
      {
        name: 'black beans',
        amount: 10,
        unit: 'oz',
        modifier: '1 can',
      },
      {
        name: 'plum tomato',
        amount: 3,
        unit: 'unit',
        modifier: 'large',
      },
      {
        name: 'red onion',
        amount: 1 / 2,
        unit: 'unit',
        modifier: 'large',
      },
      {
        name: 'extra-virgin olive oil',
        amount: 3 / 4,
        unit: 'cup',
      },
      {
        name: 'lime juice',
        amount: 1 / 2,
        unit: 'cup',
        modifier: 'fresh',
      },
      {
        name: 'cilantro',
        amount: 3,
        unit: 'tbsp',
        modifier: 'fresh and roughly chopped',
      },
      {
        name: 'hot sauce',
        amount: 3 / 4,
        unit: 'tsp',
      },
      {
        name: 'kosher salt',
        amount: 3 / 4,
        unit: 'tsp',
      },
      {
        name: 'mixed spring greens',
        amount: 12,
        unit: 'cup',
      },
      {
        name: 'egg',
        amount: 6,
        unit: 'unit',
        modifier: 'large',
      },
      {
        name: 'corn tortilla',
        amount: 6,
        unit: 'unit',
      },
      {
        name: 'queso fresco',
        amount: 1 / 2,
        unit: 'cup',
        modifier: 'crumbled',
      },
    ],
    duration: {
      prep: 10,
      total: 25,
    },
    yield: 6,
  },
  {
    title: 'Beef Enchiladas',
    description:
      'Looking for something simple that you can make with a handful of pantry staples? This recipe for easy beef enchiladas is it. It’s packed full of flavor and is perfect for an easy dinner to feed the whole family.',
    steps: [
      'Preparing the fillings for enchiladas is a two-step process: Cook the rice, then use it to create the beefy filling. Start by preparing the rice mix according to the package directions.',
      'While the rice is cooking, heat a large skillet over medium heat. Cook the beef until it’s no longer pink. Drain any excess grease and add the taco seasoning, 1-1/4 cups of the enchilada sauce and the cooked rice.',
      'Preheat the oven to 350° F and spread 1/4 cup of the enchilada sauce over the bottom of a 13×9 baking dish.',
      'To fill the enchiladas, spoon about 2/3 cup of the beef mixture down the center of each tortilla. Add a tablespoon of cheese and roll the tortillas closed. Place the filled tortillas, seam-side down, on the prepared baking dish. The enchiladas will be nestled right next to each other, and that’s okay.',
      'When all the tortillas are filled and placed in the dish, pour just enough of the remaining sauce on top of the enchiladas. You may not need all the sauce—you just need enough to coat the top without it spilling over on the sides to keep the tortillas from getting soggy. Top the mixture with the remaining sauce and cheese.',
      'Bake the enchiladas, uncovered, for about 20 to 25 minutes, until the cheese is melted. Let the enchiladas cool for at least 5 minutes before dishing them out with a spatula. Top each enchilada with the garnishes of choice. You can’t go wrong with sour cream, avocado, chopped green onions, chopped fresh cilantro, pickled jalapenos, salsa or sliced black olives.',
    ],
    ingredients: [
      {
        name: 'spanish rice',
        amount: 6.8,
        unit: 'oz',
        modifier: '1 package',
      },
      {
        name: 'ground beef',
        amount: 1,
        unit: 'lb',
        modifier: 'large',
      },
      {
        name: 'taco seasoning',
        amount: 1,
        unit: 'oz',
        modifier: '1 package',
      },
      {
        name: 'enchilada sauce',
        amount: 20,
        unit: 'oz',
        modifier: 'divided',
      },
      {
        name: 'flour tortilla',
        amount: 10,
        unit: 'unit',
        modifier: '8 inch and warmed',
      },
      {
        name: 'cheddar cheese',
        amount: 5 / 3,
        unit: 'cup',
        modifier: 'shredded and divided',
      },
      {
        name: 'sour cream',
        amount: 1,
        unit: 'tbsp',
        modifier: 'optional',
      },
      {
        name: 'avocado',
        amount: 1,
        unit: 'tbsp',
        modifier: 'optional',
      },
      {
        name: 'green onion',
        amount: 4,
        unit: 'unit',
        modifier: 'optional and chopped',
      },
      {
        name: 'egg',
        amount: 6,
        unit: 'unit',
        modifier: 'large',
      },
      {
        name: 'corn tortilla',
        amount: 6,
        unit: 'unit',
      },
      {
        name: 'queso fresco',
        amount: 1 / 2,
        unit: 'cup',
        modifier: 'crumbled',
      },
    ],
    duration: {
      prep: 10,
      total: 45,
    },
    yield: 10,
  },
];

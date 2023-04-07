import React, { useState, useEffect } from 'react';
import FavoriteCard from '../../FavoriteCard/FavoriteCard';

const initialState = [
  {
    _id: {
      $oid: '640cd5ac2d9fecf12e8897ee',
    },
    title: 'Bakewell tart',
    category: 'Dessert',
    area: 'British',
    instructions:
      'To make the pastry, measure the flour into a bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs. Add the water, mixing to form a soft dough.\r\nRoll out the dough on a lightly floured work surface and use to line a 20cm/8in flan tin. Leave in the fridge to chill for 30 minutes.\r\nPreheat the oven to 200C/400F/Gas 6 (180C fan).\r\nLine the pastry case with foil and fill with baking beans. Bake blind for about 15 minutes, then remove the beans and foil and cook for a further five minutes to dry out the base.\r\nFor the filing, spread the base of the flan generously with raspberry jam.\r\nMelt the butter in a pan, take off the heat and then stir in the sugar. Add ground almonds, egg and almond extract. Pour into the flan tin and sprinkle over the flaked almonds.\r\nBake for about 35 minutes. If the almonds seem to be browning too quickly, cover the tart loosely with foil to prevent them burning.',
    description:
      'A British dessert consisting of a shortcrust pastry shell filled with raspberry jam, frangipane, and topped with almonds.',
    thumb: 'https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg',
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560408/lygbfa7j94dgegmvnpas.jpg',
    time: '85',
    popularity: 1,
  },
  {
    _id: {
      $oid: '640cd5ac2d9fecf12e8897f0',
    },
    title: 'Teriyaki Chicken Casserole',
    category: 'Chicken',
    area: 'Japanese',
    instructions:
      'Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!',
    description:
      'A Japanese-inspired casserole made with chicken, teriyaki sauce, rice, and vegetables.',
    thumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/g7gww5fdeu7kjti0fk7s.jpg',
    time: '75',
    popularity: 0,
  },
  {
    _id: {
      $oid: '640cd5ac2d9fecf12e8897f7',
    },
    title: 'Potato Gratin with Chicken',
    category: 'Chicken',
    area: 'Unknown',
    instructions:
      "15 minute potato gratin with chicken and bacon greens: a gratin always seems more effort and more indulgent than ordinary boiled or roasts, but it doesn't have to take 45mins, it's nice for a change and you can control the calorie content by going with full fat to low fat creme fraiche. (It's always tastes better full fat though obviously!) to serve 4: use 800g of potatoes, finely slice and boil in a pan for about 5-8 mins till firmish, not soft. Finely slice 3 onions and place in an oven dish with 2 tblsp of olive oil and 100ml of chicken stock. Cook till the onions are soft then drain the potatoes and pour onto the onions. Season and spoon over cream or creme fraiche till all is covered but not swimming. Grate Parmesan over the top then finish under the grill till nicely golden. serve with chicken and bacon, peas and spinach.",
    description:
      'A French-inspired dish made with sliced potatoes, chicken, cream, garlic, and cheese, baked until golden and bubbly.',
    thumb: 'https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg',
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560406/ygp82fzogzevhtpv0g1c.jpg',
    time: '20',
    popularity: 0,
  },
  {
    _id: {
      $oid: '640cd5ac2d9fecf12e889807',
    },
    title: 'Chicken Alfredo Primavera',
    category: 'Chicken',
    area: 'Italian',
    instructions:
      'Heat 1 tablespoon of butter and 2 tablespoons of olive oil in a large skillet over medium-high heat. Season both sides of each chicken breast with seasoned salt and a pinch of pepper. Add the chicken to the skillet and cook for 5-7 minutes on each side, or until cooked through.  While the chicken is cooking, bring a large pot of water to a boil. Season the boiling water with a few generous pinches of kosher salt. Add the pasta and give it a stir. Cook, stirring occasionally, until al dente, about 12 minutes. Reserve 1/2 cup of  pasta water before draining the pasta.  Remove the chicken from the pan and transfer it to a cutting board; allow it to rest. Turn the heat down to medium and dd the remaining 1 tablespoon of butter and olive oil to the same pan you used to cook the chicken. Add the veggies (minus the garlic) and red pepper flakes to the pan and stir to coat with the oil and butter (refrain from seasoning with salt until the veggies are finished browning). Cook, stirring often, until the veggies are tender, about 5 minutes. Add the garlic and a generous pinch of salt and pepper to the pan and cook for 1 minute.  Deglaze the pan with the white wine. Continue to cook until the wine has reduced by half, about 3 minutes. Stir in the milk, heavy cream, and reserved pasta water. Bring the mixture to a gentle boil and allow to simmer and reduce for 2-3 minutes. Turn off the heat and add the Parmesan cheese and cooked pasta. Season with salt and pepper to taste. Garnish with Parmesan cheese and chopped parsley, if desired. ',
    description:
      'A creamy and satisfying pasta dish made with chicken, vegetables, and Alfredo sauce.',
    thumb: 'https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg',
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560402/anj8pdqnhdqoxmh0kgnm.jpg',
    time: '40',
    popularity: 0,
  },
  {
    _id: {
      $oid: '640cd5ac2d9fecf12e889811',
    },
    title: 'Beef Brisket Pot Roast',
    category: 'Beef',
    area: 'American',
    instructions:
      '1 Prepare the brisket for cooking: On one side of the brisket there should be a layer of fat, which you want. If there are any large chunks of fat, cut them off and discard them. Large pieces of fat will not be able to render out completely.\r\nUsing a sharp knife, score the fat in parallel lines, about 3/4-inch apart. Slice through the fat, not the beef. Repeat in the opposite direction to make a cross-hatch pattern.\r\nSalt the brisket well and let it sit at room temperature for 30 minutes.\r\n \r\n2 Sear the brisket: You\'ll need an oven-proof, thick-bottomed pot with a cover, or Dutch oven, that is just wide enough to hold the brisket roast with a little room for the onions.\r\nPat the brisket dry and place it, fatty side down, into the pot and place it on medium high heat. Cook for 5-8 minutes, lightly sizzling, until the fat side is nicely browned. (If the roast seems to be cooking too fast, turn the heat down to medium. You want a steady sizzle, not a raging sear.)\r\nTurn the brisket over and cook for a few minutes more to brown the other side.\r\n\r\n3 Sauté the onions and garlic: When the brisket has browned, remove it from the pot and set aside. There should be a couple tablespoons of fat rendered in the pot, if not, add some olive oil.\r\nAdd the chopped onions and increase the heat to high. Sprinkle a little salt on the onions. Sauté, stirring often, until the onions are lightly browned, 5-8 minutes. Stir in the garlic and cook 1-2 more minutes.\r\n \r\n4 Return brisket to pot, add herbs, stock, bring to simmer, cover, cook in oven: Preheat the oven to 300°F. Use kitchen twine to tie together the bay leaves, rosemary and thyme.\r\nMove the onions and garlic to the sides of the pot and nestle the brisket inside. Add the beef stock and the tied-up herbs. Bring the stock to a boil on the stovetop.\r\nCover the pot, place the pot in the 300°F oven and cook for 3 hours. Carefully flip the brisket every hour so it cooks evenly.\r\n \r\n5 Add carrots, continue to cook: After 3 hours, add the carrots. Cover the pot and cook for 1 hour more, or until the carrots are cooked through and the brisket is falling-apart tender.\r\n6 Remove brisket to cutting board, tent with foil: When the brisket is falling-apart tender, take the pot out of the oven and remove the brisket to a cutting board. Cover it with foil. Pull out and discard the herbs.\r\n7 Make sauce (optional): At this point you have two options. You can serve as is, or you can make a sauce with the drippings and some of the onions. If you serve as is, skip this step.\r\nTo make a sauce, remove the carrots and half of the onions, set aside and cover them with foil. Pour the ingredients that are remaining into the pot into a blender, and purée until smooth. If you want, add 1 tablespoon of mustard to the mix. Put into a small pot and keep warm.\r\n8 Slice the meat across the grain: Notice the lines of the muscle fibers of the roast. This is the "grain" of the meat. Slice the meat perpendicular to these lines, or across the grain (cutting this way further tenderizes the meat), in 1/4-inch to 1/2-inch slices.\r\nServe with the onions, carrots and gravy. Serve with mashed, roasted or boiled potatoes, egg noodles or polenta.',
    description:
      'A comforting American dish of beef brisket slow-cooked with root vegetables and herbs until tender and flavorful.',
    thumb: 'https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg',
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560404/z3m3bwmcufzil1zlw8u0.jpg',
    time: '300',
    popularity: 5,
  },
];

const FavoriteList = () => {
  const [recipes, setRecipes] = useState(initialState); // определяем состояние для списка рецептов

  useEffect(() => {
    //   используем хук useEffect для получения списка рецептов при загрузке страницы
    //   axios.get('https://example.com/api/recipes')
    //     .then(response => setRecipes(response.data))
    //     .catch(error => console.error(error));
    setRecipes(initialState);
  }, []);

  return (
    <div>
      {recipes.map(recipe => (
        <FavoriteCard
          key={recipe.id}
          title={recipe.title}
          preview={recipe.preview}
          description={recipe.description}
        />
      ))}
    </div>
  );
};

export default FavoriteList;

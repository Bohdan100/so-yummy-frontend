// import { useParams } from 'react-router-dom';

import MainContainer from 'components/MainContainer/MainContainer';
import RecipePageHero from 'components/RecipePageHero';
import RecipeIngredientsList from 'components/RecipeIngredientsList';
import RecipePreparation from 'components/RecipePreparation';

import { HeaderTable } from './RecipePage.styled';

const recipeObj = {
  _id: '640cd5ac2d9fecf12e8897f2',
  title: 'Honey Teriyaki Salmon',
  category: 'Seafood',
  area: 'Japanese',
  instructions:
    'Mix all the ingredients in the Honey Teriyaki Glaze together. Whisk to blend well. Combine the salmon and the Glaze together.\r\n\r\nHeat up a skillet on medium-low heat. Add the oil, Pan-fry the salmon on both sides until it’s completely cooked inside and the glaze thickens.\r\n\r\nGarnish with sesame and serve immediately.',
  description:
    'A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.',
  thumb: 'https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg',
  preview:
    'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/yspi0frormix0zwglhos.jpg',
  time: '25',
  popularity: 0,
  favorites: [],
  likes: [],
  youtube: 'https://www.youtube.com/watch?v=4MpYuaJsvRw',
  tags: ['Fish', 'Breakfast', 'DateNight'],
  createdAt: '2023-03-11T19:25:33.240Z',
  updatedAt: '2023-03-22T11:58:16.672Z',
  ingredients: [
    {
      id: {
        _id: '640c2dd963a319ea671e365c',
        ttl: 'Salmon',
        desc: 'Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic (genus Salmo) and Pacific Ocean (genus Oncorhynchus). Many species of salmon have been introduced into non-native environments such as the Great Lakes of North America and Patagonia in South America. Salmon are intensively farmed in many parts of the world.\r\n\r\nTypically, salmon are anadromous: they hatch in fresh water, migrate to the ocean, then return to fresh water to reproduce. However, populations of several species are restricted to fresh water through their lives. Folklore has it that the fish return to the exact spot where they hatched to spawn. Tracking studies have shown this to be mostly true. A portion of a returning salmon run may stray and spawn in different freshwater systems; the percent of straying depends on the species of salmon. Homing behavior has been shown to depend on olfactory memory. Salmon date back to the Neogene.',
        t: '',
        thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/bwzvxyjxozyankmd6ky8.png',
      },
      measure: '1 lb',
    },
    {
      id: {
        _id: '640c2dd963a319ea671e372c',
        ttl: 'Olive Oil',
        desc: 'A type of oil made from pressing whole olives, commonly used in cooking and as a salad dressing.',
        t: '',
        thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/hzcfvlja7hmbp84z7f3q.png',
      },
      measure: '1 tablespoon',
    },
    {
      id: {
        _id: '640c2dd963a319ea671e376c',
        ttl: 'Soy Sauce',
        desc: 'A sauce made from soybeans, roasted grain, water, and salt. It is commonly used as a condiment and flavoring in Asian cuisine, and is often used to season stir-fries, marinades, and dipping sauces.',
        t: '',
        thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564912/cdl2qoodjptifqk9mvwo.png',
      },
      measure: '2 tablespoons',
    },
    {
      id: {
        _id: '640c2dd963a319ea671e375c',
        ttl: 'Sake',
        desc: 'Japanese alcoholic beverage made from fermented rice and water, with a mild flavor and a relatively low alcohol content.',
        t: '',
        thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564911/z4bwqrzkityogfalbyjd.png',
      },
      measure: '2 tablespoons',
    },
    {
      id: {
        _id: '640c2dd963a319ea671e3764',
        ttl: 'Sesame Seed',
        desc: 'Sesame seeds are small, flat seeds that come from the sesame plant. They are commonly used in cooking and baking, and are known for their nutty flavor and crunchy texture.',
        t: '',
        thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564915/mlha7h546kk06bonenzr.png',
      },
      measure: '4 tablespoons',
    },
  ],
};

const RecipePage = () => {
  // потрібно взяти айді рецепту з рядка запиту через хук useParams
  // const { recipeId } = useParams();

  // потрібно зробити запит в глобальний стейт

  return (
    <>
      <RecipePageHero
        recipeObj={recipeObj}
        // передати пропом обєкт з даними по рецепту
      />
      <MainContainer>
        <HeaderTable>
          <p>Ingridients</p>
          <p>
            Number <span>Add to list</span>
          </p>
        </HeaderTable>

        <RecipeIngredientsList ingredients={recipeObj.ingredients} />
        <RecipePreparation
          image={recipeObj.thumb}
          instructions={recipeObj.instructions}
          //передаю пропом посилання на картинку рецепту та опис рецепту
        />
      </MainContainer>
    </>
  );
};

export default RecipePage;

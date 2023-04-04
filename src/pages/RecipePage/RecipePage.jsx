// import { useParams } from 'react-router-dom';

import MainContainer from 'components/MainContainer/MainContainer';
import RecipePageHero from 'components/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation';

import { HeaderTable } from './RecipePage.styled';

const RecipePage = () => {
  const recipeObj = {
    _id: '640cd5ac2d9fecf12e8897fc',
    title: 'Spaghetti Bolognese',
    category: 'Beef',
    area: 'Italian',
    instructions:
      'Put the onion and oil in a large pan and fry over a fairly high heat f…',
    description:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typi…',
    thumb: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwk…',
    time: '45',
  };

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

        <RecipeInngredientsList
        // передаю пропом інгрідієнти рецепту та айді рецепту
        />
        <RecipePreparation
        //передаю пропом посилання на картинку рецепту та опис рецепту
        />
      </MainContainer>
    </>
  );
};

export default RecipePage;

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getPopularRecipes } from 'services/popularRecipes-API';

import {
  PopularRecipesWrapper,
  Title,
  PopularRecipesList,
  PopularRecipeItem,
  LinkToRecipe,
  ImgWrapper,
  TextWrapper,
  ItemTitle,
  TextDescription,
} from './PopularRecipe.styled';

const PopularRecipe = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      const {
        data: { result },
      } = await getPopularRecipes();
      return result;
    };

    getPopular()
      .then(data => {
        if (!data) return;
        const normalizePopularRecipe = data.map(el => el.recipe);
        setPopularRecipes(normalizePopularRecipe);
      })
      .catch(error =>
        toast.error('Something went wrong...Try reloading the page ')
      );
  }, []);

  return (
    <PopularRecipesWrapper>
      <Title>Popular recipe</Title>
      {popularRecipes.length > 0 && (
        <PopularRecipesList>
          {popularRecipes.map(({ _id, title, preview, description }) => {
            const linkToOneRecipe = `/recipes/${_id}`;
            return (
              <PopularRecipeItem key={_id}>
                <LinkToRecipe to={linkToOneRecipe}>
                  <ImgWrapper>
                    <img src={preview} alt={title} />
                  </ImgWrapper>
                  <TextWrapper>
                    <ItemTitle>
                      {title.length > 30 ? title.slice(0, 35) + '...' : title}
                    </ItemTitle>
                    <TextDescription>
                      {description.slice(0, 80)}...
                    </TextDescription>
                  </TextWrapper>
                </LinkToRecipe>
              </PopularRecipeItem>
            );
          })}
        </PopularRecipesList>
      )}
      {popularRecipes.length === 0 && <p>No popular recipes</p>}
    </PopularRecipesWrapper>
  );
};

export default PopularRecipe;

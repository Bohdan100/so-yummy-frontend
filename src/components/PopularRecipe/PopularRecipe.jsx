import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
      .catch(error => toast.error(t('popularRecipe.error')));
  }, [t]);

  return (
    <PopularRecipesWrapper>
      <Title>{t('popularRecipe.title')}</Title>
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
      {popularRecipes.length === 0 && <p>{t('popularRecipe.message')}</p>}
    </PopularRecipesWrapper>
  );
};

export default PopularRecipe;

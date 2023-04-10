import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useMedia } from 'react-use';
import { toast } from 'react-toastify';
import * as API from 'services/categories-API';
import Loader from 'components/Loader/Loader';
// import RecipeCard from 'components/ReusableComponents/RecipeCard/RecipeCard';
import NotFoundWrapp from 'components/ReusableComponents/NotFoundWrapp';
import RecipeCard from 'components/ReusableComponents/RecipeCard/RecipeCard';

import {
  CategoryList,
  SeeAllBtn,
  CardList,
  Title,
  OtherBtn,
} from './PreviewCategories.styled';

const PreviewCategories = () => {
  const isTabletDevice = useMedia('(min-width: 768px)');
  const isDesctopDevice = useMedia('(min-width: 1440px)');
  const [recipesByMainCategories, setRecipesByMainCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let count;
    if (isDesctopDevice) {
      count = 4;
    } else if (isTabletDevice) {
      count = 2;
    } else {
      count = 1;
    }
    async function getRecipesByFourCategory() {
      try {
        setIsLoading(true);
        const {
          data: { recipes },
        } = await API.fetchRecipesByFourCategory(count);
        setRecipesByMainCategories(recipes);
      } catch (error) {
        setError({ error });
        toast.error(`Something went wrong. Plese try again...`);
      } finally {
        setIsLoading(false);
      }
    }
    getRecipesByFourCategory();
  }, [isDesctopDevice, isTabletDevice]);

  const onClick = ({ category }) => {
    navigate(`/categories/${category}`);
  };
  return (
    <>
      {error && (
        <NotFoundWrapp>
          Whoops, something went wrong: {error.message}
        </NotFoundWrapp>
      )}
      {isLoading && <Loader />}
      <CategoryList>
        {recipesByMainCategories &&
          Object.entries(recipesByMainCategories).map(([category, recipes]) => (
            <li key={category}>
              <Title sx={{ marginTop: '0', marginBottom: '50' }}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Title>
              <CardList>
                {recipes.map(recipe => (
                  <RecipeCard key={recipe._id} dish={recipe} />
                ))}
              </CardList>
              <SeeAllBtn onClick={() => onClick(category)}>See all</SeeAllBtn>
            </li>
          ))}
      </CategoryList>
      <OtherBtn to={'/categories'}>Other categories</OtherBtn>
    </>
  );
};

export default PreviewCategories;

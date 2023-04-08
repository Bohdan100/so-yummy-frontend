import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import * as API from '../../services/categories-API';
import Loader from 'components/Loader/Loader';
import RecipeCard from 'components/ReusableComponents/RecipeCard/RecipeCard';
import NotFoundWrapp from './NotFoundWrapp/NotFoundWrapp';
import { RecipesList } from './CategoriesByName.styled';

const CategoriesByName = () => {
  const { categoryName: category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getRecipesByCategory() {
      try {
        setIsLoading(true);
        const {
          data: {
            data: { result },
          },
        } = await API.fetchRecipesByCategory(category);
        setRecipes(result);
        toast.success(`Recipes with category ${category} was found!`);
      } catch (error) {
        setError({ error });
        toast.error(`Something went wrong. Plese try again...`);
      } finally {
        setIsLoading(false);
      }
    }
    getRecipesByCategory();
  }, [category]);

  return (
    <>
      {error && (
        <NotFoundWrapp>
          Whoops, something went wrong: {error.message}
        </NotFoundWrapp>
      )}
      {isLoading && <Loader />}
      {recipes.length > 0 && !error && !isLoading && (
        <RecipesList>
          {recipes.map(recipe => {
            return <RecipeCard dish={recipe} key={recipe._id} />;
          })}
        </RecipesList>
      )}
      {!isLoading && !error && recipes.length === 0 && (
        <NotFoundWrapp>Try looking for something else...</NotFoundWrapp>
      )}
    </>
  );
};

export default CategoriesByName;

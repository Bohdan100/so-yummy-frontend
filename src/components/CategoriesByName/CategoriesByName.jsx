import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RecipeCard from 'components/ReusableComponents/RecipeCard';
import { RecipesList } from './CategoriesByName.styled';
import * as API from '../../services/categories-API';
import Loader from 'components/Loader/Loader';

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
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }
    getRecipesByCategory();
  }, [category]);

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {recipes && (
        <RecipesList>
          {recipes.map(recipe => {
            return <RecipeCard dish={recipe} key={recipe._id} />;
          })}
        </RecipesList>
      )}
    </>
  );
};

export default CategoriesByName;

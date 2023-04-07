import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import { RecipesList } from './CategoriesByName.styled';

export const getRecipesByCategory = async (
  categoryName,
  limit = 8,
  page = 1
) => {
  try {
    const data = await axios.get(
      `/recipes/categories/${categoryName}?limit=${limit}&page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const CategoriesByName = () => {
  const { categoryName: category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getRecipesByCategory(category).then(data => {
      const {
        data: {
          data: { result },
        },
      } = data;
      setItems(result);
    });
  }, [category]);

  return (
    <RecipesList>
      {items.map(recipe => {
        return <RecipeCard dish={recipe} key={recipe._id} />;
      })}
    </RecipesList>
  );
};

export default CategoriesByName;

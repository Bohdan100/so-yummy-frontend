import React, { useState, useEffect } from 'react';
import ReusableTitle from 'components/ReusableTitle/ReusableTitle';
import Container from '../../components/MainContainer/';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import { PaginationComp } from 'components/Pagination/pagination';
import { data } from './myFavorite';
const initialState = data;

const FavoritePage = () => {
  const [recipes, setRecipes] = useState(initialState);

  const handleDelete = recipeId => {
    const updatedRecipes = recipes.filter(
      recipe => recipe._id.$oid !== recipeId
    );
    setRecipes(updatedRecipes);
  };

  useEffect(() => {
    //   axios.get('https://example.com/api/recipes')
    //     .then(response => setRecipes(response.data))
    //     .catch(error => console.error(error));
    setRecipes(initialState);
  }, []);
  return (
    <Container>
      <ReusableTitle>Favorites</ReusableTitle>
      <FavoriteList recipes={recipes} handleDelete={handleDelete} />
      <PaginationComp />
    </Container>
  );
};

export default FavoritePage;

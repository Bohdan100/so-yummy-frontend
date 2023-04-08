// import React, { useState, useEffect } from 'react';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import { FavList } from './FavoriteList.styled';
// import { data } from './myFavorite';
// const initialState = data;

const FavoriteList = ({ recipes, handleDelete }) => {
  // const [recipes, setRecipes] = useState(initialState);

  // const handleDelete = recipeId => {
  //   const updatedRecipes = recipes.filter(
  //     recipe => recipe._id.$oid !== recipeId
  //   );
  //   setRecipes(updatedRecipes);
  // };

  // useEffect(() => {
  //   //   axios.get('https://example.com/api/recipes')
  //   //     .then(response => setRecipes(response.data))
  //   //     .catch(error => console.error(error));
  //   setRecipes(initialState);
  // }, []);

  return (
    <FavList>
      {recipes.map(recipe => (
        <FavoriteCard
          key={recipe._id.$oid}
          title={recipe.title}
          preview={recipe.preview}
          description={recipe.description}
          time={recipe.time}
          onDelete={() => handleDelete(recipe._id.$oid)}
        />
      ))}
    </FavList>
  );
};

export default FavoriteList;

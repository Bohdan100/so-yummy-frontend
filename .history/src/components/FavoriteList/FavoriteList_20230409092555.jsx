// import React, { useState, useEffect } from 'react';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import { FavList, NotFavorites } from './FavoriteList.styled';

const FavoriteList = ({ recipes, handleDelete }) => {
  return (
    <>
      {
        (recipes.length = 0 && (
          <NotFavorites>
            You currently don't have any favorite recipes added. Let's add some♥
          </NotFavorites>
        ))
      }
      <FavList>
        {recipes.map(recipe => (
          <FavoriteCard
            key={recipe._id}
            id={recipe._id}
            title={recipe.recipe.title}
            preview={recipe.recipe.preview}
            description={recipe.recipe.description}
            time={recipe.recipe.time}
            onDelete={() => handleDelete(recipe._id)}
          />
        ))}
      </FavList>
    </>
  );
};

export default FavoriteList;

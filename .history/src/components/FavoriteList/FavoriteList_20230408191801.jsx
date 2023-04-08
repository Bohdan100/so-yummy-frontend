// import React, { useState, useEffect } from 'react';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import { FavList } from './FavoriteList.styled';

const FavoriteList = ({ recipes, handleDelete }) => {
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

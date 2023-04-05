import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

const StyledIngredientsShoppingList = styled.div`
  // Add your styles here
`;

const IngredientItem = styled.div`
  // Add your styles here
`;

const IngredientImage = styled.img`
  // Add your styles here
`;

const IngredientQuantity = styled.span`
  // Add your styles here
`;

const IngredientName = styled.span`
  // Add your styles here
`;

const DeleteButton = styled.button`
  // Add your styles here
`;

const IngredientsShoppingList = ({ shoppingList }) => {
  const handleDelete = async (ingredientId) => {
    try {
      await axios.delete(`/api/shopping-lists/${ingredientId}`);
      // Remove the ingredient from the shopping list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledIngredientsShoppingList>
      <h2>Shopping List</h2>
      {shoppingList.map((ingredient) => (
        <IngredientItem key={ingredient.id}>
          <IngredientImage src={ingredient.image} alt={ingredient.name} />
          <IngredientQuantity>{ingredient.quantity} {ingredient.unit}</IngredientQuantity>
          <IngredientName>{ingredient.name}</IngredientName>
          <DeleteButton onClick={() => handleDelete(ingredient.id)}>Delete</DeleteButton>
        </IngredientItem>
      ))}
    </StyledIngredientsShoppingList>
  );
};

IngredientsShoppingList.propTypes = {
  shoppingList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
  })).isRequired,
};

export default IngredientsShoppingList;

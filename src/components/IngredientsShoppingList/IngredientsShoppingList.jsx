import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

const StyledIngredientsShoppingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;

  h2 {
    margin-bottom: 24px;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
  }
`;

const IngredientItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  padding: 16px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const IngredientImage = styled.img`
  width: 96px;
  height: 96px;
  margin-right: 24px;
  object-fit: cover;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const IngredientQuantity = styled.span`
  margin-right: 24px;
  font-size: 24px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const IngredientName = styled.span`
  flex: 1;
  font-size: 24px;
  font-weight: 700;
`;

const DeleteButton = styled.button`
  padding: 12px 16px;
  background-color: #FF725E;
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #E0483E;
  }
`;

const IngredientsShoppingList = ({ ingredients }) => {
  const handleDelete = async (ingredientId) => {
    try {
      await axios.delete(`/api/shopping-lists/${ingredientId}`);
      // Remove the ingredient from the shopping list
    } catch (error) {
      console.error(error);
    }
  };
  console.log(ingredients);

  return (
    <StyledIngredientsShoppingList>
      <h2>Shopping List</h2>
      {ingredients.map((ingredient) => (
        <IngredientItem key={ingredient._id}>
          <IngredientImage src={ingredient.image} alt={ingredient.strIngredient} />
          <IngredientQuantity>{ingredient.weight} 
          {/* {ingredient.unit} */}
          </IngredientQuantity>
          <IngredientName>{ingredient.recipeId}</IngredientName>
          <DeleteButton onClick={() => handleDelete(ingredient._id)}>Delete</DeleteButton>
        </IngredientItem>
      ))}
    </StyledIngredientsShoppingList>
  );
};

// IngredientsShoppingList.propTypes = {
//   shoppingList: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//     unit: PropTypes.string.isRequired,
//   })).isRequired,
// };

export default IngredientsShoppingList;

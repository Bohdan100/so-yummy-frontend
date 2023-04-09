import { useDispatch } from 'react-redux';

import {
  IngredientItem,
  IngredientItemWrapper,
  ImageWrapper,
  TextContainer,
  NameIngredient,
  WeighIngredient,
  PickIconStyled,
  DeleteButton,
} from './IngredientsShoppingItem.styled';

import { deleteProduct } from 'redux/ShoppingList/shoppingListOperations';

const IngredientsShoppingItem = ({
  image,
  id,
  nameIngredient,
  weight,
  recipeId,
}) => {
  const dispatch = useDispatch();

  return (
    <IngredientItem>
      <IngredientItemWrapper>
        <ImageWrapper>
          <img src={image} alt={nameIngredient} />
        </ImageWrapper>
        <TextContainer>
          <NameIngredient>{nameIngredient}</NameIngredient>
        </TextContainer>
        <WeighIngredient>{weight}</WeighIngredient>
        <DeleteButton type="buton" onClick={() => dispatch(deleteProduct(id))}>
          <PickIconStyled />
        </DeleteButton>
      </IngredientItemWrapper>
    </IngredientItem>
  );
};

export default IngredientsShoppingItem;

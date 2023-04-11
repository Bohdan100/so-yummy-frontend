import { useDispatch } from 'react-redux';

import {
  IngredientItem,
  ImageWrapper,
  TextContainer,
  NameIngredient,
  WeighIngredient,
  DelIconStyled,
  DeleteButton,
} from './IngredientsShoppingItem.styled';

import { deleteProduct } from 'redux/ShoppingList/shoppingListOperations';

const IngredientsShoppingItem = ({
  image,
  id,
  nameIngredient,
  weight,
}) => {
  const dispatch = useDispatch();

  return (
    <IngredientItem>
        <ImageWrapper>
          <img src={image} alt={nameIngredient} />
        </ImageWrapper>
        <TextContainer>
          <NameIngredient>{nameIngredient}</NameIngredient>
        </TextContainer>
        <WeighIngredient>{weight}</WeighIngredient>
        <DeleteButton type="buton" onClick={() => dispatch(deleteProduct(id))}>
          <DelIconStyled />
        </DeleteButton>
    </IngredientItem>
  );
};

export default IngredientsShoppingItem;

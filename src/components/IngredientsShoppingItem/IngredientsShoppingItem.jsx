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
import NotPhoto from '../../images/bgPages/recipePage/not-photo.png';

const IngredientsShoppingItem = ({ image, id, nameIngredient, weight }) => {
  const dispatch = useDispatch();

  return (
    <IngredientItem>
      <ImageWrapper>
        {image !== ' ' ? (
          <img src={image} alt={nameIngredient} />
        ) : (
          <img src={NotPhoto} alt="no ingredient" />
        )}
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

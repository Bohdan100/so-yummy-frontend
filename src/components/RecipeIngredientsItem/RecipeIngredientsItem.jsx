import { useDispatch } from 'react-redux';
import {
  addProduct,
  deleteProduct,
} from 'redux/ShoppingList/shoppingListOperations';

import {
  RecipeItem,
  RecipeItemWrapper,
  ImageWrapper,
  TextContainer,
  NameIngredient,
  WeighIngredient,
  CustomCheckbox,
  PickIconStyled,
  RealCheckbox,
} from './RecipeIngredientsItem.styled';

const RecipeIngredientsItem = ({
  image,
  nameIngredient,
  weight,
  recipeId,
  id,
}) => {
  const dispatch = useDispatch();
  // пропом отримую інгрідієнти та айді рецепту

  // console.log({
  //   strIngredient: nameIngredient,
  //   weight,
  //   image,
  //   recipeId,
  // });
  return (
    <RecipeItem>
      <RecipeItemWrapper onClick={() => dispatch(deleteProduct(id))}>
        <ImageWrapper>
          <img src={image} alt={nameIngredient} />
        </ImageWrapper>
        <TextContainer>
          <NameIngredient>{nameIngredient}</NameIngredient>
        </TextContainer>

        <WeighIngredient>{weight}</WeighIngredient>
        <RealCheckbox
          type="checkbox"
          onChange={() =>
            dispatch(
              addProduct({
                strIngredient: nameIngredient,
                weight,
                image,
                recipeId,
              })
            )
          }
          // checked={}
        />
        <CustomCheckbox>
          <PickIconStyled />
        </CustomCheckbox>
      </RecipeItemWrapper>
    </RecipeItem>
  );
};

export default RecipeIngredientsItem;

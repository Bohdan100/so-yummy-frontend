import { useDispatch } from 'react-redux';

import {
  RecipeItem,
  RecipeItemWrapper,
  ImageWrapper,
  TextContainer,
  NameIngredient,
//   DescriptionIngridient,
  WeighIngredient,
  CustomCheckbox,
  PickIconStyled,
  DeleteButton,
} from './IngredientsShoppingItem.styled';

import {
  addProduct,
  deleteProduct,
} from 'redux/ShoppingList/shoppingListOperations';

const IngredientsShoppingItem = ({
  image,
  id,
  nameIngredient,
  weight,
  recipeId,
//   list,
}) => {
  const dispatch = useDispatch();

  const toggleToShoppingList = () => {
    // if (inShoppingList) {
    //   const ingrid = list.find(item => item.recipeId === recipeId);
    //   dispatch(deleteProduct(ingrid._id));
    //   return;
    // }

    dispatch(
      addProduct({
        strIngredient: nameIngredient,
        weight,
        image,
        recipeId,
      })
    );
    return;
  };
console.log(image,"image");
  return (
    <RecipeItem>
      <RecipeItemWrapper>
        <ImageWrapper>
          <img src={image} alt={nameIngredient} />
        </ImageWrapper>
        <TextContainer>
          <NameIngredient>{nameIngredient}</NameIngredient>
        </TextContainer>
        <WeighIngredient>{weight}</WeighIngredient>
        <DeleteButton onClick={() => dispatch(deleteProduct(id))}>Х</DeleteButton>
        <CustomCheckbox>
          <PickIconStyled />
        </CustomCheckbox>
      </RecipeItemWrapper>
    </RecipeItem>
  );
};

export default IngredientsShoppingItem;

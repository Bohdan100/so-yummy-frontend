import { useDispatch } from 'react-redux';

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

import {
  addProduct,
  deleteProduct,
} from 'redux/ShoppingList/shoppingListOperations';

const RecipeIngredientsItem = ({
  image,
  nameIngredient,
  weight,
  recipeId,
  id,
  inShoppingList,
  list,
}) => {
  const dispatche = useDispatch();

  const toggleToShoppingList = () => {
    if (inShoppingList) {
      const ingrid = list.find(item => item.recipeId === recipeId);
      dispatche(deleteProduct(ingrid._id));
      return;
    }

    dispatche(
      addProduct({
        strIngredient: nameIngredient,
        weight,
        image,
        recipeId,
      })
    );
    return;
  };

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
        <RealCheckbox
          type="checkbox"
          onChange={toggleToShoppingList}
          checked={inShoppingList}
        />
        <CustomCheckbox>
          <PickIconStyled />
        </CustomCheckbox>
      </RecipeItemWrapper>
    </RecipeItem>
  );
};

export default RecipeIngredientsItem;

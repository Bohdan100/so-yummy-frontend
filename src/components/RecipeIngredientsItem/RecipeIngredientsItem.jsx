import { useDispatch } from 'react-redux';

import {
  RecipeItem,
  RecipeItemWrapper,
  ImageWrapper,
  TextContainer,
  NameIngredient,
  DescriptionIngridient,
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
  descriptionIngredient,
  weight,
  recipeId,
  inShoppingList,
  list,
}) => {
  const dispatch = useDispatch();

  const toggleToShoppingList = () => {
    if (inShoppingList) {
      const ingrid = list.find(item => {
        return item.recipeId === recipeId;
      });
      console.log('жмакнув по id', ingrid._id);
      dispatch(deleteProduct(ingrid._id));
      return;
    }

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

  return (
    <RecipeItem>
      <RecipeItemWrapper>
        <ImageWrapper>
          <img src={image} alt={nameIngredient} />
        </ImageWrapper>
        <TextContainer>
          <NameIngredient>{nameIngredient}</NameIngredient>
          {descriptionIngredient && (
            <DescriptionIngridient>
              {descriptionIngredient}
            </DescriptionIngridient>
          )}
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

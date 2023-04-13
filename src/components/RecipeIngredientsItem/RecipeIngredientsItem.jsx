import { useDispatch } from 'react-redux';

import NotPhoto from '../../images/bgPages/recipePage/not-photo.png';
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
          {image ? (
            <img src={image} alt={nameIngredient} />
          ) : (
            <img src={NotPhoto} alt="no ingredient" />
          )}
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

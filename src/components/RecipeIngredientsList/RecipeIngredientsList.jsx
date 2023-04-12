import { useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { selectProducts } from 'redux/ShoppingList/shoppingListSelectors';

import RecipeIngredientsItem from 'components/RecipeIngredientsItem';
import { IngredientsListStyled } from './RecipeIngredientsList.styled';

const RecipeIngredientsList = ({ ingredients, recipeId }) => {
  const list = useSelector(selectProducts);
  function getIngDescription(id) {
    if (list.length !== 0) {
      const ingridID = list.some(ingrid => ingrid.recipeId === id);
      return ingridID;
    }
    return false;
  }

  return (
    <>
      <IngredientsListStyled>
        {ingredients.map((ingredient, index) => (
          <RecipeIngredientsItem
            key={uuidv4()}
            image={ingredient.id.thb}
            nameIngredient={ingredient.id.ttl}
            descriptionIngredient={ingredient.id.desc}
            weight={ingredient.measure ? ingredient.measure : 'any'}
            list={list}
            recipeId={recipeId + index}
            inShoppingList={getIngDescription(recipeId + index)}
          />
        ))}
      </IngredientsListStyled>
    </>
  );
};

export default RecipeIngredientsList;

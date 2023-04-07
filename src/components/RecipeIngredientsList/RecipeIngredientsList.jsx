import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectProducts } from 'redux/ShoppingList/shoppingListSelectors';
import { fetchProducts } from 'redux/ShoppingList/shoppingListOperations';

import RecipeIngredientsItem from 'components/RecipeIngredientsItem';
import { IngredientsListStyled } from './RecipeIngredientsList.styled';

const RecipeIngredientsList = ({ ingredients, recipeId }) => {
  const list = useSelector(selectProducts);
  const dispatche = useDispatch();

  useEffect(() => {
    if (list.length === 0) {
      dispatche(fetchProducts());
    }
  }, [dispatche, list.length]);

  function getIngDescription(id) {
    if (list.length !== 0) {
      const ingridID = list.some(ingrid => ingrid.recipeId === id);
      return ingridID;
    }
    return false;
  }

  return (
    <IngredientsListStyled>
      {ingredients.map((ingredient, index) => (
        <RecipeIngredientsItem
          key={ingredient.id._id}
          image={ingredient.id.thb}
          nameIngredient={ingredient.id.ttl}
          weight={ingredient.measure ? ingredient.measure : 'any'}
          list={list}
          recipeId={recipeId + index}
          inShoppingList={getIngDescription(recipeId + index)}
        />
      ))}
    </IngredientsListStyled>
  );
};

export default RecipeIngredientsList;

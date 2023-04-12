import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import { fetchProducts } from 'redux/ShoppingList/shoppingListOperations';
import { selectProducts } from 'redux/ShoppingList/shoppingListSelectors';

import RecipeIngredientsItem from 'components/RecipeIngredientsItem';
import { IngredientsListStyled } from './RecipeIngredientsList.styled';

const RecipeIngredientsList = ({ ingredients, recipeId }) => {
  // const dispatch = useDispatch();

  const list = useSelector(selectProducts);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch, list.length]);

  console.log(list);
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

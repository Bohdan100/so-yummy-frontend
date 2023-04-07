import { useSelector } from 'react-redux';

import RecipeIngredientsItem from 'components/RecipeIngredientsItem';

import { IngredientsListStyled } from './RecipeIngredientsList.styled';
import { selectProducts } from 'redux/ShoppingList/shoppingListSelectors';

const RecipeIngredientsList = ({ ingredients, recipeId }) => {
  const list = useSelector(selectProducts);
  console.log(list);

  return (
    <IngredientsListStyled>
      {ingredients.map(ingredient => (
        <RecipeIngredientsItem
          key={ingredient.id._id}
          image={ingredient.id.thb}
          nameIngredient={ingredient.id.ttl}
          weight={ingredient.measure ? ingredient.measure : 'any'}
          recipeId={recipeId}
        />
      ))}
    </IngredientsListStyled>
  );
};

export default RecipeIngredientsList;

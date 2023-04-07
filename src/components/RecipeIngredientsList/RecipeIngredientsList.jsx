import RecipeIngredientsItem from 'components/RecipeIngredientsItem';

import { IngredientsListStyled } from './RecipeIngredientsList.styled';

const RecipeIngredientsList = ({ ingredients }) => {
  return (
    <IngredientsListStyled>
      {ingredients.map(ingredient => (
        <RecipeIngredientsItem
          key={ingredient.id._id}
          image={ingredient.id.thb}
          nameIngredient={ingredient.id.ttl}
          weight={ingredient.measure ? ingredient.measure : 'any'}
        />
      ))}
    </IngredientsListStyled>
  );
};

export default RecipeIngredientsList;

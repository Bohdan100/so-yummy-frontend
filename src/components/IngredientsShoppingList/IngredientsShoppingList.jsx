import IngredientsShoppingItem from 'components/IngredientsShoppingItem';
import { IngredientsListStyled } from './IngredientsShoppingList.styled';

const IngredientsShoppingList = ({ ingredients }) => {
  return (
    <>
      <IngredientsListStyled>
        {ingredients.map(ingredient => (
          <IngredientsShoppingItem
            key={ingredient._id}
            image={ingredient.image}
            nameIngredient={ingredient.strIngredient}
            weight={ingredient.weight ? ingredient.weight : 'any'}
            recipeId={ingredient.recipeId}
            id={ingredient._id}
          />
        ))}
      </IngredientsListStyled>
    </>
  );
};

export default IngredientsShoppingList;

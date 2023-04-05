import RecipeInngredientsItem from 'components/RecipeInngredientsItem';

const RecipeInngredientsList = ({ ingredients }) => {
  console.log(ingredients);

  return (
    <div>
      {ingredients.map(ingredient => (
        <RecipeInngredientsItem
          key={ingredient.id._id}
          image={ingredient.id.thb}
          nameIngredient={ingredient.id.ttl}
          weight={ingredient.measure ? ingredient.measure : 'any'}
        />
      ))}
    </div>
  );
};

export default RecipeInngredientsList;

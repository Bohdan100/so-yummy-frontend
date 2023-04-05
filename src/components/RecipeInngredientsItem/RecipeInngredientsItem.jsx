const RecipeInngredientsItem = ({ image, nameIngredient, weight }) => {
  // пропом отримую інгрідієнти та айді рецепту
  return (
    <div>
      <li>
        <div>
          <img src={image} alt={nameIngredient} />
        </div>
        <p>{nameIngredient}</p>
        <p>{weight}</p>
      </li>
    </div>
  );
};

export default RecipeInngredientsItem;

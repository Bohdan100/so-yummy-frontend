import IngredientsShoppingItem from 'components/IngredientsShoppingItem/IngredientsShoppingItem';
import { IngredientsListStyled } from './IngredientsShoppingList.styled';

const IngredientsShoppingList = ({ ingredients }) => {
  // const list = useSelector(selectProducts);

  // const dispatche = useDispatch();

  // useEffect(() => {
  //   dispatche(fetchProducts());
  // }, [dispatche]);

  // function getIngDescription(id) {
  //   if (list.length !== 0) {
  //     const ingridID = list.some(ingrid => ingrid.recipeId === id);
  //     return ingridID;
  //   }
  //   return false;
  // }

  return (
    <>
      <IngredientsListStyled>
        {ingredients.map((ingredient, index) => (
          <IngredientsShoppingItem
            key={ingredient._id}
            image={ingredient.image}
            nameIngredient={ingredient.strIngredient}
            weight={ingredient.weight ? ingredient.weight : 'any'}
            // list={list}
            recipeId={ingredient.recipeId}
            id={ingredient._id}
          />
        ))}
      </IngredientsListStyled>
    </>
  );
};

export default IngredientsShoppingList;

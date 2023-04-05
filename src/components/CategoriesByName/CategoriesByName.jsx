import RecipeCard from 'components/RecipeCard/RecipeCard';
import { RecipesList } from './CategoriesByName.styled';
import { recipes } from './recipes';

const CategoriesByName = () => {
  return (
    <RecipesList>
      {recipes.data.result.map(recipe => {
        return <RecipeCard meal={recipe} key={recipe._id} />;
      })}
    </RecipesList>
  );
};

export default CategoriesByName;

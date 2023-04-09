import FavoriteCard from '../FavoriteCard';
import { FavList } from './FavoriteList.styled';

const FavoriteList = ({ recipes, handleDelete }) => {
  return (
    <FavList>
      {recipes.map(recipe => (
        <FavoriteCard
          key={recipe.recipe._id}
          id={recipe.recipe._id}
          title={recipe.recipe.title}
          preview={recipe.recipe.preview}
          description={recipe.recipe.description}
          time={recipe.recipe.time}
          onDelete={() => handleDelete(recipe.recipe._id)}
        />
      ))}
    </FavList>
  );
};

export default FavoriteList;

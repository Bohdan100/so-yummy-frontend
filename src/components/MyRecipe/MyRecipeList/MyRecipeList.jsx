import { List } from './MyRecipeList.styled';
import MyRecipeItem from '../MyRecipeItem/MyRecipeItem';

const MyRecipeList = ({ data }) => {
  return (
    <List>
      {data.map(({ category, description, preview, time, title, _id }) => {
        return (
          <MyRecipeItem
            key={_id}
            category={category}
            description={description}
            preview={preview}
            time={time}
            title={title}
            id={_id}
          />
        );
      })}
    </List>
  );
};
export default MyRecipeList;

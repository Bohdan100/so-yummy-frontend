import ReusableTitle from 'components/ReusableTitle/ReusableTitle';
import Container from '../../components/MainContainer/';
import FavoriteList from 'components/Favorite/FavoriteList/';

const FavoritePage = () => {
  return (
    <Container>
      <ReusableTitle>Favorites</ReusableTitle>
      <FavoriteList />
    </Container>
  );
};

export default FavoritePage;

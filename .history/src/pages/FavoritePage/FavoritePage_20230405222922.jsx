import ReusableTitle from 'components/ReusableTitle/ReusableTitle';
import Container from '../../components/MainContainer/';
import FavoriteCard from 'components/FavoriteCard/FavoriteCard';
const FavoritePage = () => {
  return (
    <Container>
      <ReusableTitle>Favorites</ReusableTitle>
      <FavoriteCard />
    </Container>
  );
};

export default FavoritePage;

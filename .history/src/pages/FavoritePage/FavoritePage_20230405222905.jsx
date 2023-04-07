import ReusableTitle from 'components/ReusableTitle/ReusableTitle';
import Container from '../../components/MainContainer/';
const FavoritePage = () => {
  return (
    <Container>
      <ReusableTitle>Favorites</ReusableTitle>
      <FavoriteCard />
    </Container>
  );
};

export default FavoritePage;

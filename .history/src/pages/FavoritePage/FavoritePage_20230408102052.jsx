import ReusableTitle from 'components/ReusableTitle/ReusableTitle';
import Container from '../../components/MainContainer/';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import { PaginationComp } from 'components/Pagination/Pagination';
const FavoritePage = () => {
  return (
    <Container>
      <ReusableTitle>Favorites</ReusableTitle>
      <FavoriteList />
      <PaginationComp />
    </Container>
  );
};

export default FavoritePage;

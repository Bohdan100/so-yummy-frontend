import Container from '../../components/MainContainer/MainContainer';
import CategoriesList from 'components/CategoriesList/CategoriesList';
import ReusableTitle from 'components/ReusableTitle/ReusableTitle';
import CategoriesByName from 'components/CategoriesByName';

const CategoriesPage = () => {
  return (
    <div>
      <Container>
        <ReusableTitle>Categories</ReusableTitle>
        <CategoriesList />
        <CategoriesByName />
      </Container>
    </div>
  );
};

export default CategoriesPage;

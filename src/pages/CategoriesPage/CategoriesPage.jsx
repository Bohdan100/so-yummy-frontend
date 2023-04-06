import Container from '../../components/MainContainer/MainContainer';
import CategoriesList from 'components/CategoriesList/CategoriesList';
import CategoriesByName from 'components/CategoriesByName/CategoriesByName';
import ReusableTitle from 'components/ReusableTitle/ReusableTitle';

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

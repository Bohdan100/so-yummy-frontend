import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from '../../components/MainContainer/MainContainer';
import CategoriesList from 'components/CategoriesList/CategoriesList';
import CategoriesByName from 'components/CategoriesByName/CategoriesByName';

const CategoriesPage = () => {
  return (
    <div>
      <Container>
        <h1>Categories</h1>
        <CategoriesList />
        <CategoriesByName />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};

export default CategoriesPage;

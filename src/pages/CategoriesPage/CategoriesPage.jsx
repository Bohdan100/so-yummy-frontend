import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/MainContainer/MainContainer';
import CategoriesList from 'components/CategoriesByName/CategoriesList/CategoriesList';
import ReusableTitle from 'components/ReusableComponents/ReusableTitle/ReusableTitle';

const CategoriesPage = () => {
  return (
    <div>
      <Container>
        <ReusableTitle>Categories</ReusableTitle>
        <CategoriesList />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};

export default CategoriesPage;

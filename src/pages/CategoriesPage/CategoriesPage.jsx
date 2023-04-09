import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MainContainer from '../../components/MainContainer';
import CategoriesList from 'components/CategoriesByName/CategoriesList/CategoriesList';
import ReusableTitle from 'components/ReusableComponents/ReusableTitle/ReusableTitle';
import Loader from 'components/Loader/Loader';

const CategoriesPage = () => {
  return (
    <MainContainer>
      <ReusableTitle>Categories</ReusableTitle>
      <CategoriesList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default CategoriesPage;

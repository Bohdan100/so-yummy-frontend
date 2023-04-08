import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MainContainer from '../../components/MainContainer';
import CategoriesList from 'components/CategoriesByName/CategoriesList/CategoriesList';
import ReusableTitle from 'components/ReusableComponents/ReusableTitle/ReusableTitle';
import Loader from 'components/Loader/Loader';

const CategoriesPage = () => {
  return (
    <div>
      <MainContainer>
        <ReusableTitle>Categories</ReusableTitle>
        <CategoriesList />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </div>
  );
};

export default CategoriesPage;

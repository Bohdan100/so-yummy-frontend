import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MainContainer from '../../components/MainContainer';
import CategoriesList from 'components/CategoriesByName/CategoriesList/CategoriesList';
import ReusableTitle from 'components/ReusableComponents/ReusableTitle/ReusableTitle';
import Loader from 'components/Loader/Loader';

const CategoriesPage = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <ReusableTitle>{t('categoriesPage.title')}</ReusableTitle>
      <CategoriesList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default CategoriesPage;

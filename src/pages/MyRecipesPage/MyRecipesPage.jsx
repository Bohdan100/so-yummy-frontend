import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import MainContainer from 'components/MainContainer/MainContainer';
import MyRecipeList from 'components/MyRecipe/MyRecipeList/MyRecipeList';
import { PaginationComp } from '../../components/Pagination/pagination';
import { WrapText } from 'components/WrapText/WrapText';
import Loader from 'components/Loader';
import {
  getOwnRecipesList,
  getTotalOwnRecipes,
  selectIsLoading,
} from '../../redux/OwnRecipes/OwnRecipesSelectors';
import { getOwnRecipes } from 'redux/OwnRecipes/OwnRecipesOperations';
import ReusableTitle from '../../components/ReusableComponents/ReusableTitle';

const MyRecipesPage = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const recipes = useSelector(getOwnRecipesList);
  const total = useSelector(getTotalOwnRecipes);
  const isFetching = useSelector(selectIsLoading);
  const limit = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getOwnRecipes({ page: pageNumber, limit: limit }));
  }, [dispatch, pageNumber]);

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  useEffect(() => {
    history(`?page=${pageNumber}`);
  }, [history, pageNumber]);

  return (
    <div>
      <MainContainer>
        <ReusableTitle>{t('myRecipesPage.title')}</ReusableTitle>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            {recipes && recipes.length > 0 ? (
              <MyRecipeList data={recipes} />
            ) : (
              <WrapText />
            )}
            {recipes && recipes.length > 0 && (
              <PaginationComp
                count={Math.ceil(total / limit)}
                page={pageNumber}
                handleChange={handleChange}
              />
            )}
          </>
        )}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </div>
  );
};

export default MyRecipesPage;

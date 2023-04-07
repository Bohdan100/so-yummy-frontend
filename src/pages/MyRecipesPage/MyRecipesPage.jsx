import { Outlet } from 'react-router';
import { Suspense } from 'react';
import MainContainer from 'components/MainContainer/MainContainer';
import MyRecipeList from 'components/MyRecipe/MyRecipeList/MyRecipeList';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PaginationComp } from '../../components/Pagination/pagination';
import { WrapText } from 'components/WrapText/WrapText';
import {
  getOwnRecipesList,
  getTotalOwnRecipes,
  // selectIsLoading,
} from '../../redux/OwnRecipes/OwnRecipesSelectors';
import { getOwnRecipes } from 'redux/OwnRecipes/OwnRecipesOperations';
import ReusableTitle from '../../components/ReusableComponents/ReusableTitle/ReusableTitle';

const MyRecipesPage = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const recipes = useSelector(getOwnRecipesList);
  const total = useSelector(getTotalOwnRecipes);
  // const isFetching = useSelector(selectIsLoading);
  const limit = 4;
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(getOwnRecipes({ page: pageNumber, limit: limit }));
  }, [dispatch, pageNumber]);

  useEffect(() => {
    if (recipes.length < limit)
      dispatch(getOwnRecipes({ page: pageNumber, limit: limit }));
    if (recipes.length <= 0)
      dispatch(getOwnRecipes({ page: pageNumber - 1, limit: limit }));
  }, [dispatch, recipes.length, pageNumber]);

  const handleChange = (event, value) => {
    console.log('value', value);
    setPageNumber(value);
  };

  useEffect(() => {
    history(`?page=${pageNumber}`);
  }, [history, pageNumber]);

  // useEffect(() => {
  //   dispatch(getOwnRecipes());
  // }, [dispatch]);

  return (
    <div>
      <MainContainer>
        <ReusableTitle>My Recipes</ReusableTitle>
        {/* <h2>My Recipes</h2> */}
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
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </div>
  );
};

export default MyRecipesPage;

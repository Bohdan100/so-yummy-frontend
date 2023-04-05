import { Outlet } from 'react-router';
import { Suspense } from 'react';
import MainContainer from 'components/MainContainer/MainContainer';
import MyRecipeList from 'components/MyRecipe/MyRecipeList/MyRecipeList';

const MyRecipesPage = () => {
  return (
    <div>
      <MainContainer>
        <h2>My Recipes</h2>
        <MyRecipeList />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </div>
  );
};

export default MyRecipesPage;

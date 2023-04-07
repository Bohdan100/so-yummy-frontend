import { ThemeProvider } from 'styled-components';
import { theme } from '../constants';
import { GlobalStyle } from './GlobalStyle';

import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoriesByName from '../components/CategoriesByName';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/Auth/authOperations';

import Layout from 'components/Layout';
import SharedLayout from 'components/SharedLayout';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const SigninPage = lazy(() => import('pages/SigninPage'));
const MainPage = lazy(() => import('pages/MainPage'));
const CategoriesPage = lazy(() => import('pages/CategoriesPage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const RecipePage = lazy(() => import('pages/RecipePage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<PublicRoute component={WelcomePage} redirectTo="/main" />}
          />
          <Route
            path="register"
            element={
              <PublicRoute component={RegisterPage} redirectTo="/main" />
            }
          />
          <Route
            path="signin"
            element={<PublicRoute component={SigninPage} redirectTo="/main" />}
          />
        </Route>
        <Route
          path="/"
          element={
            <PrivateRoute component={SharedLayout} redirectTo="/login" />
          }
        >
          <Route path="/main" element={<MainPage />} />
          <Route path="/categories" element={<CategoriesPage />}>
            <Route path=":categoryName" element={<CategoriesByName />} />
          </Route>
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

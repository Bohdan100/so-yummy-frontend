import { ThemeProvider } from 'styled-components';
import { theme } from '../constants';
import { GlobalStyle } from './GlobalStyle';

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';

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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            // <PublicRoute restricted>
            <WelcomePage />
            // </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            // <PublicRoute restricted>
            <RegisterPage />
            // </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            // <PublicRoute restricted>
            <SigninPage />
            // </PublicRoute>
          }
        />
        {/*  */}
        <Route
          path="/"
          element={
            // <PrivateRoute>
            <SharedLayout />
            // </PrivateRoute>
          }
        >
          <Route path="/main" element={<MainPage />} />
          <Route
            path="/categories/:categoryName"
            element={<CategoriesPage />}
          />
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
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchShoppingList } from '../../redux/shoppingList/actions';

import {
  ShoppingListPageWrapper,
  EmptyListMessage,
  StyledLoaderWrapper,
} from './ShoppingListPage.styled';
import ReusableTitle from '../../components/ReusableTitle/ReusableTitle';
import Loader from '../../components/Loader/Loader';
import RecipeIngredientsList from '../../components/RecipeIngredientsList/RecipeIngredientsList';


const ShoppingListPage = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.shoppingList.shoppingList);
  const isLoading = useSelector((state) => state.shoppingList.isLoading);

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  return (
    <ShoppingListPageWrapper>
      <ReusableTitle title="Shopping List" />
      {isLoading ? (
        <StyledLoaderWrapper>
          <Loader />
        </StyledLoaderWrapper>
      ) : (
        <>
          {shoppingList.length === 0 ? (
            <EmptyListMessage>Your shopping list is currently empty</EmptyListMessage>
          ) : (
            <RecipeIngredientsList ingredients={shoppingList} isShoppingList />
          )}
        </>
      )}
    </ShoppingListPageWrapper>
  );
};

export default ShoppingListPage;

import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectProducts } from '../../redux/ShoppingList/shoppingListSelectors';
import { fetchProducts } from 'redux/ShoppingList/shoppingListOperations';

import MainContainer from 'components/MainContainer';
import IngredientsShoppingList from 'components/IngredientsShoppingList';
import ReusableTitle from '../../components/ReusableComponents/ReusableTitle/ReusableTitle'

import {
  HeaderTable,
  // ShopListTitle,
  EmptyListMessage,
  StyledLoaderWrapper,
} from './ShoppingListPage.styled';
import Loader from 'components/Loader/Loader';

const isLoading = false;

const ShoppingListPage = () => {
  const shoppingList = useSelector(selectProducts);

  const revers = arr => arr.map((_, index) => arr[arr.length - 1 - index]);
  const reversedShoppingList = revers(shoppingList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, shoppingList.length]);

  return (
    <MainContainer>
      <ReusableTitle>Shopping list</ReusableTitle>
      <HeaderTable>
        <p>Products</p>
        <p>
          Number <span>Remove</span>
        </p>
      </HeaderTable>
      {isLoading ? (
        <StyledLoaderWrapper>
          <Loader />
        </StyledLoaderWrapper>
      ) : (
        <>
          {shoppingList.length === 0 ? (
            <EmptyListMessage>
              Your shopping list is currently empty
            </EmptyListMessage>
          ) : (
            <IngredientsShoppingList ingredients={reversedShoppingList} />
          )}
        </>
      )}
    </MainContainer>
  );
};

export default ShoppingListPage;

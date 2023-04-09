import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectProducts } from '../../redux/ShoppingList/shoppingListSelectors';
import { fetchProducts } from 'redux/ShoppingList/shoppingListOperations';

import MainContainer from 'components/MainContainer';
import IngredientsShoppingList from 'components/IngredientsShoppingList';

import {
  HeaderTable,
  ShopListTitle,
  EmptyListMessage,
  StyledLoaderWrapper,
} from './ShoppingListPage.styled';
import Loader from 'components/Loader/Loader';

const isLoading = false;

const ShoppingListPage = () => {
  const shoppingList = useSelector(selectProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, shoppingList.length]);

  return (
    <MainContainer>
      <ShopListTitle>Shopping list</ShopListTitle>
      <HeaderTable>
        <p>Ingridients</p>
        <p>
          Number <span>Add to list</span>
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
            <IngredientsShoppingList ingredients={shoppingList} />
          )}
        </>
      )}
    </MainContainer>
  );
};

export default ShoppingListPage;

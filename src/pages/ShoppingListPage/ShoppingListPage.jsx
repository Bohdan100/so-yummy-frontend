import React from 'react';

import { useSelector } from 'react-redux';

import { selectProducts } from '../../redux/ShoppingList/shoppingListSelectors';

import MainContainer from 'components/MainContainer';
import IngredientsShoppingList from 'components/IngredientsShoppingList';
import ReusableTitle from '../../components/ReusableComponents/ReusableTitle/ReusableTitle';

import { HeaderTable, StyledLoaderWrapper } from './ShoppingListPage.styled';
import Loader from 'components/Loader/Loader';
import NotFoundWrapp from 'components/ReusableComponents/NotFoundWrapp';

const isLoading = false;

const ShoppingListPage = () => {
  const shoppingList = useSelector(selectProducts);

  const revers = arr => arr.map((_, index) => arr[arr.length - 1 - index]);
  const reversedShoppingList = revers(shoppingList);

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
            <NotFoundWrapp>Your shopping list is currently empty</NotFoundWrapp>
          ) : (
            <IngredientsShoppingList ingredients={reversedShoppingList} />
          )}
        </>
      )}
    </MainContainer>
  );
};

export default ShoppingListPage;

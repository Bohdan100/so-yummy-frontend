import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { useState, useEffect } from 'react';
import {selectProducts} from '../../redux/ShoppingList/shoppingListSelectors';
// import { fetchShoppingList } from '../../redux/shoppingList/actions';
import { fetchProducts } from 'redux/ShoppingList/shoppingListOperations';
import MainContainer from 'components/MainContainer/MainContainer';
import {
  HeaderTable,
  ShopListTitle,
  EmptyListMessage,
  StyledLoaderWrapper,
} from './ShoppingListPage.styled';
import ReusableTitle from '../../components/ReusableComponents/ReusableTitle/ReusableTitle';
import Loader from '../../components/Loader/Loader';
import IngredientsShoppingList from '../../components/IngredientsShoppingList/IngredientsShoppingList';

const isLoading = false;

const ShoppingListPage = () => {
  const shoppingList = useSelector(selectProducts);
  console.log(shoppingList);

  const dispatch = useDispatch();
  // const shoppingList = useSelector((state) => state.shoppingList.shoppingList);
  // const isLoading = useSelector((state) => state.shoppingList.isLoading);

   useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  // const shoppingList = [
  //   {
  //     _id: '642ddb7a85c0cb3cc8effcb2',
  //     owner: '642d1ff4bd700df10ee37a49',
  //     strIngredient: 'potato',
  //     weight: '200g',
  //     image:
  //       'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/bwzvxyjxozyankmd6ky8.png',
  //     recipeId: '640c2dd963a319ea671e3661',
  //   },
  //   {
  //     _id: '642ddb7a85c0cb3cc8effcb3',
  //     owner: '642d1ff4bd700df10ee37a49',
  //     strIngredient: 'potato',
  //     weight: '200g',
  //     image:
  //       'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/bwzvxyjxozyankmd6ky8.png',
  //     recipeId: '640c2dd963a319ea671e3661',
  //   },
  // ];

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
            <IngredientsShoppingList
              ingredients={shoppingList}
            />
          )}
        </>
      )}
    </MainContainer>
  );
};

export default ShoppingListPage;

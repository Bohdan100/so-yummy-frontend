import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../redux/shoppingList/actions";
// import { addItem, deleteItem, deleteAllItems } from '../redux/shoppingList/actions';
import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import IngredientsShoppingList from '../../components/IngredientsShoppingList/IngredientsShoppingList';


const ShoppingListPage = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.shoppingList.ingredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <>
      <MainPageTitle title="Shopping List" />
      <IngredientsShoppingList ingredients={ingredients} />
    </>
  );
};

export default ShoppingListPage;

import { useSelector } from 'react-redux';
import {
  selectProducts,
  selectIsLoading,
  selectError,
} from 'redux/ShoppingList/shoppingListSelectors.js';

export const useShoppingList = () => {
  return {
    selectProducts: useSelector(selectProducts),
    selectIsLoading: useSelector(selectIsLoading),
    error: useSelector(selectError),
  };
};

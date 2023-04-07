import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './Auth/authSlice';
import { shoppingListReducer } from './ShoppingList/shoppingListSlice';
import { ownRecipesReduser } from './OwnRecipes/OwnRecipesSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'theme'],
};

const ownRecipesPersistConfig = {
  key: 'ownRecipes',
  storage,
  whitelist: ['ownRecipes'],
};

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    shoppingList: shoppingListReducer,
    ownRecipes: persistReducer(ownRecipesPersistConfig, ownRecipesReduser),
  },
  middleware,
});

export const persistor = persistStore(store);

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
import { themeReducer } from './Theme/themeSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
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
    ownRecipes: ownRecipesReduser,
    theme: persistReducer(themePersistConfig, themeReducer),
  },
  middleware,
});

export const persistor = persistStore(store);

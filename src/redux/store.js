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
// import { authReducer } from './Auth/authSlice';
// import { shoppingListReducer } from './ShoppingList/shoppingListSlice';
import { ownRecipesReduser } from './OwnRecipes/OwnRecipesSlice';

const ownRecipesPersistConfig = {
  key: 'ownRecipes',
  storage,
  whitelist: ['ownRecipes'],
};

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token', 'theme'],
// };

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    ownRecipes: persistReducer(ownRecipesPersistConfig, ownRecipesReduser),
    // shoppingList: shoppingListReducer,
  },
  middleware,
});

export const persistor = persistStore(store);

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { ownRecipesReduser } from './OwnRecipes/OwnRecipesSlice';

// const ownRecipesPersistConfig = {
//   key: 'ownRecipes',
//   storage,
//   whitelist: ['ownRecipes'],
// };

// const persistedOwnRecipesReducer = persistReducer(
//   ownRecipesPersistConfig,
//   ownRecipesReduser
// );

// export const store = configureStore({
//   reducer: {
//     ownRecipes: persistedOwnRecipesReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

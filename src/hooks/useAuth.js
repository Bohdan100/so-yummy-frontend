import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectTheme,
  selectError,
} from 'redux/Auth/authSelectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
    userTheme: useSelector(selectTheme),
    error: useSelector(selectError),
  };
};

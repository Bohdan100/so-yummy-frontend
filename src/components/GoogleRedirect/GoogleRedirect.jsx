import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { setGoogleAuth } from 'redux/Auth/authSlice';
import { setAuthHeader } from 'services/auth-API';

import MainContainer from 'components/MainContainer';
import ReusableTitle from 'components/ReusableComponents/ReusableTitle';
import Loader from 'components/Loader/Loader';
import { StyledLoaderWrapper } from './GoogleRedirect.styled';

const GoogleRedirect = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    const name = searchParams.get('name');
    const avatar = searchParams.get('avatar');

    if (!token || !email || !name || !avatar) {
      return;
    }

    dispatch(setGoogleAuth({ user: { name, email, avatar }, token }));
    setAuthHeader(token);
  }, [dispatch, searchParams]);

  return (
    <MainContainer>
      <ReusableTitle>Google authorization</ReusableTitle>

      <StyledLoaderWrapper>
        <Loader />
      </StyledLoaderWrapper>
    </MainContainer>
  );
};

export default GoogleRedirect;

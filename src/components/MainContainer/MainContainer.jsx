import React from 'react';
import MainPageTitle from '../MainPageTitle/MainPageTitle';
import { MainContainerWrapper } from './MainContainer.styled';

const MainContainer = ({ children }) => {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <MainContainerWrapper>
        <MainPageTitle />
        {children}
      </MainContainerWrapper>
    </main>
  );
};

export default MainContainer;

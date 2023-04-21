import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

import {
  LayoutStyled,
  ContentContainer,
  FooterContainer,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Suspense fallback={null}>
      <LayoutStyled className="container">
        <ContentContainer>
          <Header />

          <main>
            <Outlet />
          </main>
        </ContentContainer>

        <FooterContainer>
          <Footer />
        </FooterContainer>
      </LayoutStyled>
    </Suspense>
  );
};

export default SharedLayout;

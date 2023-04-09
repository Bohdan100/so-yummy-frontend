import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader/Loader';
import {
  LayoutStyled,
  ContentContainer,
  FooterContainer,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <LayoutStyled className="container">
      <ContentContainer>
        <Header />

        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </ContentContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </LayoutStyled>
  );
};

export default SharedLayout;

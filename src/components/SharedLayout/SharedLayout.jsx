import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const SharedLayout = () => {
  return (
    // <div>SharedLayout</div>;
    <div className="container">
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;

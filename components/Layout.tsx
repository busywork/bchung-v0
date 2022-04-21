import React from 'react';

import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <div>
        <Header />
        <main className="container flex flex-col justify-center items-center p-4 mx-auto max-w-6xl">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

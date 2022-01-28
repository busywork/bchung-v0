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
        <main className="flex flex-col justify-center items-center p-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

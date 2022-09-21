import React from 'react';

import Meta from '../components/Meta';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <div>
        <Nav />
        <main className="container flex flex-col justify-center items-center p-4 mx-auto max-w-6xl">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

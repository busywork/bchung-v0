import React from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      <main className="container flex flex-col justify-center items-center p-4 mx-auto max-w-6xl">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

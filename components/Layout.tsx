import React from 'react';
import styles from '../styles/Layout.module.css';

import Meta from '../components/Meta';
import Footer from '../components/Footer';

import DarkModeToggle from '../components/DarkModeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <div className={`${styles.container} bg-white dark:bg-gray-800 dark:text-gray-200`}>
        <div className="flex justify-end">
          <div>
            <DarkModeToggle />
          </div>
        </div>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

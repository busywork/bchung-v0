import React, { useEffect, useState } from 'react';

import DarkModeToggle from './DarkModeToggle';
import MobileNav from './MobileNav';
import UnstyledLink from './UnstyledLink';
import navLinks from '../contents/navLinks';

const Nav = () => {
  const [navTop, setNavTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setNavTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={'sticky top-0 transition-shadow z-50 ' + (navTop ? 'shadow-none' : 'shadow-2xl')}
    >
      <nav className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-400 h-16">
        <div className="flex items-center justify-between p-4">
          <div className="flex">
            <div>
              <UnstyledLink href={'/'}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_6)">
                    <path
                      d="M22.6259 29.8584V31.7895H31.8792V0.00025177H0.0895996V31.7895H5.20995C7.20744 31.7895 9.3027 31.0266 9.3027 28.7396C9.3027 27.2136 8.43053 26.5083 7.11474 26.0381C8.12727 25.498 8.68617 24.7243 8.68617 23.5479C8.68617 21.4807 6.86412 20.709 5.05208 20.709H2.88419V22.4343H4.81149C5.76387 22.4343 6.75385 22.7444 6.75385 23.8669C6.75385 25.0667 5.69112 25.3945 4.67357 25.3945H2.88419V27.0248H5.09969C6.10971 27.0248 7.37038 27.273 7.37038 28.5286C7.37038 29.7406 6.2576 30.0642 5.24005 30.0642H2.02192V1.93133H29.9469V29.8584H22.6259ZM20.6962 30.0166L19.4455 28.7501C18.4906 29.6399 17.601 30.1907 16.2626 30.1907C14.0596 30.1907 12.6059 28.3431 12.6059 26.2336C12.6059 24.1288 14.0721 22.3075 16.2626 22.3075C17.5157 22.3075 18.4681 22.8509 19.3653 23.685L20.616 22.2446C19.3629 21.0409 18.0396 20.5191 16.2777 20.5191C12.9819 20.5191 10.5633 23.0349 10.5633 26.2652C10.5633 29.471 12.9694 31.9795 16.2 31.9795C18.0646 31.9795 19.4431 31.3612 20.6962 30.0166Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6">
                      <rect width="32" height="32" />
                    </clipPath>
                  </defs>
                </svg>
              </UnstyledLink>
            </div>
            <div className="hidden sm:block">
              {navLinks.map(({ href, label }) => (
                <UnstyledLink key={label} href={href} className="text-2xl text-white pl-4">
                  <span className="underline ">{label}</span>
                </UnstyledLink>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <DarkModeToggle />
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import React, { useState } from 'react';

import UnstyledLink from './UnstyledLink';
import navLinks from '../contents/navLinks';

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow(status => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };

  return (
    <div className="flex sm:hidden">
      <button
        type="button"
        className="h-8 w-8 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`fixed top-0 left-0 z-10 h-full w-full transform bg-white opacity-90 duration-300 ease-in-out dark:bg-black ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-4 mt-4 h-8 w-8 rounded"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-black dark:text-white"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="fixed mt-8 h-full">
          <div className="px-12 py-4">
            <UnstyledLink href={'/'} onClick={onToggleNav}>
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
                    className="fill-black dark:fill-white"
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
          {navLinks.map(({ href, label }) => (
            <div key={label} className="px-12 py-4">
              <UnstyledLink
                href={href}
                className="text-2xl font-bold tracking-widest text-black dark:text-white"
                onClick={onToggleNav}
              >
                {label}
              </UnstyledLink>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;

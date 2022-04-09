import React, { useEffect, useState } from 'react';
import { MdMenu } from 'react-icons/md';

import UnstyledLink from './UnstyledLink';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
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
      <nav className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-400">
        <div className="container flex items-center justify-between mx-auto">
          <button
            className="px-4 py-2 outline-none focus:outline-none text-white text-4xl sm:hidden"
            type="button"
            onClick={() => setNavOpen(!navOpen)}
          >
            <MdMenu />
          </button>
          <div className="hidden sm:inline-block">
            <ul className="flex flex-col sm:flex-row list-none">
              {links.map(({ href, label }, i) => (
                <li key={label}>
                  <UnstyledLink className="px-4 py-2 flex items-center text-white" href={href}>
                    <span className="text-xs">{`0${i}.`}</span>
                    <span className="text-xl">{label}</span>
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <DarkModeToggle />
          </div>
        </div>
        <div className={'sm:hidden ' + (navOpen ? 'inline-block' : 'hidden')}>
          <ul className="flex flex-col sm:flex-row list-none">
            {links.map(({ href, label }, i) => (
              <li key={label}>
                <UnstyledLink
                  className="px-4 py-2 flex items-center text-white"
                  href={href}
                  onClick={() => setNavOpen(!navOpen)}
                >
                  <span className="text-xs">{`0${i}.`}</span>
                  <span className="text-xl">{label}</span>
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

const links = [
  { href: '/#hero', label: 'ᗺ' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#snippets', label: 'Snippets' },
];

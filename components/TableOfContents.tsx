import React from 'react';

import UnstyledLink from './UnstyledLink';

import useHeadings from '../hooks/useHeadings';
import useScrollSpy from '../hooks/useScrollspy';

const TableOfContents = () => {
  const headings = useHeadings();

  const activeId = useScrollSpy(
    headings.map(({ id }) => id),
    { rootMargin: '0% 0% -90%' }
  );

  return (
    <div className="hidden lg:block overflow-auto">
      <span className="text-sm font-bold">TABLE OF CONTENTS</span>
      <ul className="mt-4">
        {headings.map(heading => (
          <li key={heading.id}>
            <UnstyledLink
              className={
                'text-sm ' +
                (activeId === heading.id
                  ? 'dark:text-white font-bold'
                  : 'text-gray-500 font-normal')
              }
              style={{
                marginLeft: `${(heading.level - 2) / 2}rem`,
              }}
              href={`#${heading.id}`}
            >
              {(heading.level % 2 !== 0 ? `- ` : ``) + `${heading.text}`}
            </UnstyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;

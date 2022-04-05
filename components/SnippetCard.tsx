import React from 'react';

import TechIcons from './TechIcons';
import UnstyledLink from './UnstyledLink';

import { SnippetFrontmatter } from '../types/frontmatter';

type SnippetCardProps = {
  snippet: SnippetFrontmatter;
  className?: string;
} & React.ComponentPropsWithoutRef<'li'>;

const SnippetCard = ({ snippet, className = '' }: SnippetCardProps) => {
  return (
    <li
      className={`bg-white dark:bg-black max-w-xs rounded overflow-hidden m-4 transition duration-100 hover:scale-105 border border-gray-800 dark:border-gray-200 ${className}`}
    >
      <UnstyledLink href={`/snippets/${snippet.slug}`}>
        <div className="px-4 py-4">
          <div className="text-black dark:text-white font-bold text-xl mb-2">{snippet.title}</div>
          <div className="pt-2 pb-2">
            <TechIcons tech={snippet.tech} />
          </div>
          <p className="text-black dark:text-white text-base">{snippet.description}</p>
        </div>
      </UnstyledLink>
    </li>
  );
};

export default SnippetCard;

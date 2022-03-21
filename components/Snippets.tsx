import React from 'react';

import SnippetCard from './SnippetCard';
import { SnippetFrontmatter } from '../types/frontmatter';

type SnippetsProps = {
  snippets: SnippetFrontmatter[];
  className?: string;
} & React.ComponentPropsWithoutRef<'section'>;

const Snippets = ({ snippets }: SnippetsProps) => {
  return (
    <section id="snippets" className="flex flex-col justify-center items-center">
      <ul className="flex flex-row flex-wrap justify-center items-center">
        {snippets.map(snippet => (
          <SnippetCard key={snippet.slug} snippet={snippet} />
        ))}
      </ul>
    </section>
  );
};

export default Snippets;

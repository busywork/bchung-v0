import React from 'react';

import Heading from './Heading';
import SnippetCard from './SnippetCard';
import { SnippetFrontmatter } from '../types/frontmatter';

type SnippetsProps = {
  snippets: SnippetFrontmatter[];
} & React.ComponentPropsWithoutRef<'section'>;

const Snippets = ({ snippets }: SnippetsProps) => {
  return (
    <section id="snippets" className="flex flex-col justify-center items-center">
      <div className="flex flex-col mt-16">
        <span className="-mb-1">collection of code</span>
        <Heading className={'text-2xl numbered-heading'}>Snippets</Heading>
      </div>
      <ul className="flex flex-row flex-wrap justify-center">
        {snippets.map(snippet => (
          <SnippetCard key={snippet.slug} snippet={snippet} />
        ))}
      </ul>
    </section>
  );
};

export default Snippets;

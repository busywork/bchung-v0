import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';

import { getFiles, getFileData } from '../../utils/mdx';
import { SnippetType } from '../../types/frontmatter';

const Snippet = ({ code, frontmatter }: SnippetType) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <section id={frontmatter.title} className="flex flex-col">
      <Component />
    </section>
  );
};

export default Snippet;

export const getStaticPaths: GetStaticPaths = () => {
  const snippets = getFiles('snippets');

  return {
    paths: snippets.map(snippet => ({
      params: {
        slug: snippet.replace(/\.(mdx|md)/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getFileData('snippets', params?.slug as string);

  return {
    props: { ...data },
  };
};

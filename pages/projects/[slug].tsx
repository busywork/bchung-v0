import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';

import { getFiles, getFileData } from '../../utils/mdx';
import { ProjectType } from '../../types/frontmatter';

const Project = ({ code, frontmatter }: ProjectType) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <section id={frontmatter.title} className="flex flex-col">
      <Component />
    </section>
  );
};

export default Project;

// https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
export const getStaticPaths: GetStaticPaths = () => {
  const projects = getFiles('projects');

  return {
    paths: projects.map(project => ({
      params: {
        // remove file extensions
        slug: project.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getFileData('projects', params?.slug as string);

  return {
    props: { ...data },
  };
};

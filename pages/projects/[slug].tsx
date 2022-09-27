import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { FiExternalLink } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';

import SEO from '../../components/SEO';
import CloudinaryImage from '../../components/CloudinaryImage';
import Heading from '../../components/Heading';
import MDXComponents from '../../components/MDXComponents';
import TableOfContents from '../../components/TableOfContents';
import UnstyledLink from '../../components/UnstyledLink';

import siteMetadata from '../../contents/siteMetadata';
import { getFiles, getFileData } from '../../utils/mdx';
import { ProjectType } from '../../types/frontmatter';

const Project = ({ code, frontmatter }: ProjectType) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <SEO
        title={`${siteMetadata.title} : ${frontmatter.title}`}
        description={frontmatter.description}
      />
      <section id={frontmatter.title} className="flex flex-col">
        <div>
          <CloudinaryImage height="800" width="1280" publicId={frontmatter.banner} alt="" />
          <div className="flex">
            <Heading as={'h1'} className="text-2xl mt-4">
              {frontmatter.title}
            </Heading>
            <div className="flex items-center mt-4">
              {frontmatter.github && (
                <span className="mx-2">
                  <UnstyledLink href={frontmatter.github} openNew={true}>
                    <SiGithub />
                  </UnstyledLink>
                </span>
              )}
              {frontmatter.link && (
                <span className="mx-2">
                  <UnstyledLink href={frontmatter.link} openNew={true}>
                    <FiExternalLink />
                  </UnstyledLink>
                </span>
              )}
            </div>
          </div>
          <p className="text-black dark:text-white mb-4">{frontmatter.description}</p>
        </div>

        <div className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
          <article className="mx-auto w-full lg:mb-36">
            <Component components={MDXComponents} />
          </article>

          <aside className="py-4">
            <div className="sticky top-36">
              <TableOfContents />
            </div>
          </aside>
        </div>
      </section>
    </>
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

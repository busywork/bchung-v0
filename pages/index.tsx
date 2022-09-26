import type { InferGetStaticPropsType } from 'next';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Snippets from '../components/Snippets';

import siteMetadata from '../contents/siteMetadata';
import { getAllFrontmatter, getFeaturedFrontmatter } from '../utils/mdx';

const Home = ({ projectsData, snippetsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <Projects projects={projectsData} />
      <Snippets snippets={snippetsData} />
    </>
  );
};

export default Home;

export const getStaticProps = () => {
  const projectsFrontmatter = getAllFrontmatter('projects');
  const snippetsFrontmatter = getAllFrontmatter('snippets');

  const projectsData = getFeaturedFrontmatter(projectsFrontmatter, ['barometric', 'crud_academy']);
  const snippetsData = getFeaturedFrontmatter(snippetsFrontmatter, ['js_algos']);

  return {
    props: { projectsData, snippetsData },
  };
};

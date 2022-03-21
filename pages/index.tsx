import type { InferGetStaticPropsType } from 'next';

import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Snippets from '../components/Snippets';

import { getFilesFrontmatter } from '../utils/mdx';

const Home = ({ projectsData, snippetsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Hero />
      <Projects projects={projectsData} />
      <Snippets snippets={snippetsData} />
    </>
  );
};

export default Home;

export const getStaticProps = () => {
  const projectsData = getFilesFrontmatter('projects');
  const snippetsData = getFilesFrontmatter('snippets');

  return {
    props: { projectsData, snippetsData },
  };
};

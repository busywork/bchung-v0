import type { InferGetStaticPropsType } from 'next';

import Hero from '../components/Hero';
import Projects from '../components/Projects';

import { getFilesFrontmatter } from '../utils/mdx';

const Home = ({ projectsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Hero />
      <Projects projects={projectsData} />
    </>
  );
};

export default Home;

export const getStaticProps = () => {
  const projectsData = getFilesFrontmatter('projects');

  return {
    props: { projectsData },
  };
};

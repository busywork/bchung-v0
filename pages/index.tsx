import type { InferGetStaticPropsType } from 'next';

import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Snippets from '../components/Snippets';

import { getAllFrontmatter, getFeaturedFrontmatter } from '../utils/mdx';

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
  const projectsFrontmatter = getAllFrontmatter('projects');
  const snippetsFrontmatter = getAllFrontmatter('snippets');

  const projectsData = getFeaturedFrontmatter(projectsFrontmatter, ['project_0', 'project_1']);
  const snippetsData = getFeaturedFrontmatter(snippetsFrontmatter, [
    'snippet_0',
    'snippet_1',
    'snippet_2',
  ]);

  return {
    props: { projectsData, snippetsData },
  };
};

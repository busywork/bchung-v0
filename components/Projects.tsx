import React from 'react';

import ProjectCard from './ProjectCard';
import { ProjectFrontmatter } from '../types/frontmatter';

type ProjectsProps = {
  projects: ProjectFrontmatter[];
  className?: string;
} & React.ComponentPropsWithoutRef<'section'>;

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="flex flex-col justify-center items-center">
      <ul className="flex flex-row flex-wrap justify-center items-center">
        {projects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        <li>
          <ul>
            <ProjectCard project={projects[0]} className={'absolute my-0 z-10'} />
            <ProjectCard
              project={projects[1]}
              className={
                'transform-gpu translate-x-0 lg:translate-x-[25%] lg:rotate-3 xl:rotate-12'
              }
            />
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Projects;

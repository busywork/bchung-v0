import React from 'react';

import CloudinaryImage from './CloudinaryImage';
import TechIcons from './TechIcons';
import UnstyledLink from './UnstyledLink';

import { ProjectFrontmatter } from '../types/frontmatter';

type ProjectCardProps = {
  project: ProjectFrontmatter;
  className?: string;
} & React.ComponentPropsWithoutRef<'li'>;

const ProjectCard = ({ project, className = '' }: ProjectCardProps) => {
  return (
    <li
      className={`bg-white dark:bg-black max-w-xs rounded overflow-hidden m-4 transition duration-100 hover:scale-105 border border-gray-800 dark:border-gray-200 ${className}`}
    >
      <UnstyledLink href={`/projects/${project.slug}`}>
        <CloudinaryImage
          className="w-full h-full"
          height="200"
          width="320"
          publicId={project.banner}
          alt=""
        />
        <div className="px-4 py-4">
          <div className="text-black dark:text-white font-bold text-xl mb-2">{project.title}</div>
          <p className="text-black dark:text-white text-base">{project.description}</p>
        </div>
        <div className="px-4 pt-2 pb-2">
          <TechIcons tech={project.tech} />
        </div>
      </UnstyledLink>
    </li>
  );
};

export default ProjectCard;

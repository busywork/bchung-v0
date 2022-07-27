import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';

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
      className={`max-w-xs rounded overflow-hidden transition duration-100 hover:scale-105 border border-gray-800 dark:border-gray-200 m-4 ${className}`}
    >
      <UnstyledLink href={`/projects/${project.slug}`}>
        <CloudinaryImage
          className="w-full h-full"
          height="200"
          width="320"
          publicId={project.banner}
          alt=""
        />
      </UnstyledLink>
      <div className="p-4">
        <div className="flex justify-between font-bold text-xl">
          <UnstyledLink href={`/projects/${project.slug}`}>
            <div>{project.title}</div>
          </UnstyledLink>
          <div className="flex items-center">
            {project.github && (
              <span className="mx-2">
                <UnstyledLink href={project.github} openNew={true}>
                  <SiGithub />
                </UnstyledLink>
              </span>
            )}
            {project.link && (
              <span className="mx-2">
                <UnstyledLink href={project.link} openNew={true}>
                  <FiExternalLink />
                </UnstyledLink>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="px-8">
        <p>{project.description}</p>
      </div>
      <div className="p-4">
        <TechIcons tech={project.tech} />
      </div>
    </li>
  );
};

export default ProjectCard;

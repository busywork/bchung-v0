import React from 'react';
import {
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJest,
  SiMarkdown,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSequelize,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';

type TechIconsProps = {
  tech: string;
  className?: string;
} & React.ComponentPropsWithoutRef<'ul'>;

type TechListType = keyof typeof techList;

const TechIcons = ({ tech, className = '' }: TechIconsProps) => {
  const techStack = tech.split(',') as Array<TechListType>;

  return (
    <ul className={`${className}`}>
      {techStack.map(tech => {
        if (!techList[tech]) return;
        const techItem = techList[tech];

        return (
          <li
            key={techItem.name}
            className="inline-block bg-gray-200 text-black text-xl rounded p-1 mr-2"
          >
            <techItem.icon />
          </li>
        );
      })}
    </ul>
  );
};

export default TechIcons;

const techList = {
  bootstrap: {
    name: 'Bootstrap',
    icon: SiBootstrap,
  },
  express: {
    name: 'Express',
    icon: SiExpress,
  },
  firebase: {
    name: 'Firebase',
    icon: SiFirebase,
  },
  git: {
    name: 'Git',
    icon: SiGit,
  },
  github: {
    name: 'GitHub',
    icon: SiGithub,
  },
  javascript: {
    name: 'JavaScript',
    icon: SiJavascript,
  },
  jest: {
    name: 'Jest',
    icon: SiJest,
  },
  mdx: {
    name: 'MDX',
    icon: SiMarkdown,
  },
  nextjs: {
    name: 'Next.js',
    icon: SiNextdotjs,
  },
  nodejs: {
    name: 'Node.js',
    icon: SiNodedotjs,
  },
  postgres: {
    name: 'PostgreSQL',
    icon: SiPostgresql,
  },
  react: {
    name: 'React',
    icon: SiReact,
  },
  redux: {
    name: 'Redux',
    icon: SiRedux,
  },
  sequelize: {
    name: 'Sequelize',
    icon: SiSequelize,
  },
  styledcomponents: {
    name: 'Styled-Components',
    icon: SiStyledcomponents,
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
  },
  typescript: {
    name: 'TypeScript',
    icon: SiTypescript,
  },
  webpack: {
    name: 'Webpack',
    icon: SiWebpack,
  },
};

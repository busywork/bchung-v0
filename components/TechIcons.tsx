import React from 'react';
import {
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMarkdown,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
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
            className="inline-block bg-gray-200 text-black text-xl rounded px-1 py-1 mr-2 mb-2"
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
  firebase: {
    name: 'Firebase',
    icon: SiFirebase,
  },
  git: {
    name: 'Git',
    icon: SiGit,
  },
  javascript: {
    name: 'JavaScript',
    icon: SiJavascript,
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
  react: {
    name: 'React',
    icon: SiReact,
  },
  redux: {
    name: 'Redux',
    icon: SiRedux,
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
  },
  typescript: {
    name: 'TypeScript',
    icon: SiTypescript,
  },
};

import React, { useEffect, useState } from 'react';
import { GoOctoface, GoRepoForked, GoStar } from 'react-icons/go';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

import UnstyledLink from './UnstyledLink';

type RepositoryProps = {
  forks_count: number;
  stargazers_count: number;
};

const Footer = () => {
  const [gitStats, setGitStats] = useState<RepositoryProps>({
    forks_count: 0,
    stargazers_count: 0,
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/busywork/bchung-v0')
      .then(response => response.json())
      .then(json => {
        const { forks_count, stargazers_count } = json as RepositoryProps;
        setGitStats({
          forks_count,
          stargazers_count,
        });
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <footer className="flex flex-col justify-center items-center p-4">
      <div className="flex flex-row justify-center items-center text-xl pb-2 border-b">
        {socialList.map(social => (
          <UnstyledLink key={social.name} href={social.href} openNew={true}>
            <social.icon className="mx-4" />
          </UnstyledLink>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center">
        <span className="mx-4">{gitStats.stargazers_count}</span>
        <GoStar />
        <UnstyledLink href={'https://github.com/busywork/bchung-v0'} openNew={true}>
          <GoOctoface className="mx-4" />
        </UnstyledLink>
        <GoRepoForked />
        <span className="mx-4">{gitStats.forks_count}</span>
      </div>
      <div>&copy; {new Date().getFullYear()} BRIAN CHUNG</div>
    </footer>
  );
};

export default Footer;

const socialList = [
  {
    name: 'GitHub',
    icon: SiGithub,
    href: 'https://github.com/busywork',
  },
  {
    name: 'LinkedIn',
    icon: SiLinkedin,
    href: 'https://www.linkedin.com/in/brichung',
  },
  {
    name: 'Twitter',
    icon: SiTwitter,
    href: 'https://twitter.com/bsywrk',
  },
];

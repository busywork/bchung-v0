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
          <UnstyledLink key={social.name} href={social.href}>
            <social.icon className="mx-4" />
          </UnstyledLink>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center">
        <span className="mx-4">{gitStats.stargazers_count}</span>
        <GoStar />
        <GoOctoface className="mx-4" />
        <GoRepoForked />
        <span className="mx-4">{gitStats.forks_count}</span>
      </div>
      <div>
        <UnstyledLink href={'https://api.github.com/repos/busywork/bchung-v0'}>
          &copy; {new Date().getFullYear()} BRIAN CHUNG
        </UnstyledLink>
      </div>
    </footer>
  );
};

export default Footer;

const socialList = [
  {
    name: 'GitHub',
    icon: SiGithub,
    href: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    icon: SiLinkedin,
    href: 'https://linkedin.com',
  },
  {
    name: 'Twitter',
    icon: SiTwitter,
    href: 'https://twitter.com',
  },
];

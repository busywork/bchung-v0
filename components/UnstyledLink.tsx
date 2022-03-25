import React from 'react';
import Link, { LinkProps } from 'next/link';

type UnstyledLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
} & LinkProps;

const UnstyledLink = ({ children, href, className, ...props }: UnstyledLinkProps) => {
  return (
    <Link href={href}>
      <a className={className} {...props}>
        {children}
      </a>
    </Link>
  );
};

export default UnstyledLink;

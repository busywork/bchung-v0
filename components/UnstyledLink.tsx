import React from 'react';
import Link, { LinkProps } from 'next/link';

type UnstyledLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
} & LinkProps;

const UnstyledLink = ({ children, href, className, onClick, ...props }: UnstyledLinkProps) => {
  return (
    <Link href={href}>
      <a className={className} onClick={onClick} {...props}>
        {children}
      </a>
    </Link>
  );
};

export default UnstyledLink;

import React from 'react';
import Link, { LinkProps } from 'next/link';

type UnstyledLinkProps = {
  children: React.ReactNode;
  href: string;
  openNew?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
} & LinkProps;

const UnstyledLink = ({
  children,
  href,
  openNew,
  className,
  style,
  onClick,
  ...props
}: UnstyledLinkProps) => {
  if (openNew)
    return (
      <a target="_blank" rel="noopener noreferrer" href={href} className={className} {...props}>
        {children}
      </a>
    );

  return (
    <Link href={href}>
      <a className={className} style={style} onClick={onClick} {...props}>
        {children}
      </a>
    </Link>
  );
};

export default UnstyledLink;

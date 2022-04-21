import React from 'react';
import Link, { LinkProps } from 'next/link';

type UnstyledLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
} & LinkProps;

const UnstyledLink = ({
  children,
  href,
  className,
  style,
  onClick,
  ...props
}: UnstyledLinkProps) => {
  return (
    <Link href={href}>
      <a className={className} style={style} onClick={onClick} {...props}>
        {children}
      </a>
    </Link>
  );
};

export default UnstyledLink;

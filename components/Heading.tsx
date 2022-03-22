import React from 'react';

import Gradient from './Gradient';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<'h2'>;

const Heading = ({ children, className = '' }: HeadingProps) => {
  // TODO: dynamic heading tags
  // const Tag = level as keyof JSX.IntrinsicElements;

  return (
    <h2 className={`${className}`}>
      <Gradient>{children}</Gradient>
    </h2>
  );
};

export default Heading;

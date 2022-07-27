import React from 'react';

import Gradient from './Gradient';

const getId = (children: string) =>
  children
    .split(' ')
    .map(word => word.toLowerCase())
    .join('-');

type HeadingProps = {
  children: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  id?: string;
  className?: string;
};

const Heading = ({ children, as: Element, id, className }: HeadingProps) => {
  const eId = id ?? getId(children);

  return (
    <Element id={eId} className={className}>
      <Gradient>{children}</Gradient>
    </Element>
  );
};

export default Heading;

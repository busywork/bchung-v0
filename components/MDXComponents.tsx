import Heading from './Heading';

/*
 * https://mdxjs.com/docs/using-mdx/#components
 */

const MDXComponents = {
  h2: props => <Heading as={'h2'} className={'offset text-xl'} {...props} />,
  h3: props => <Heading as={'h3'} className={'offset text-xl'} {...props} />,
};

export default MDXComponents;

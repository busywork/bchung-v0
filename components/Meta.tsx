import Head from 'next/head';

type MetaProps = {
  title: string;
  description: string;
};

const Meta = ({ title, description }: MetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'bchung.dev',
  description: 'Generated by create next app',
};

export default Meta;

import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
};

const SEO = ({ title, description }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
    </Head>
  );
};

export default SEO;

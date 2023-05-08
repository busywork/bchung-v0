import { NextSeo } from 'next-seo';

type SEOProps = {
  title: string;
  description: string;
  siteURL: string;
};

const SEO = ({ title, description, siteURL }: SEOProps) => {
  return <NextSeo title={title} description={description} canonical={siteURL} />;
};

export default SEO;

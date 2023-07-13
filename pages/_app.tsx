import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import Layout from '../components/Layout';
import config from '../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...config} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

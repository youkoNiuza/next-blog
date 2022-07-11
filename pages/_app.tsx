import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Meta from 'components/Common/Meta';
import Scripts from 'components/Common/Scripts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
      <Scripts />
    </>
  );
}

export default MyApp;

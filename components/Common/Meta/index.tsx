import * as React from 'react';
import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"></meta>
      <meta httpEquiv="Content-Security-Policy" content="img-src localhost www.qzzhai.top data: 'self'; child-src 'none';"></meta>
    </Head>
  );
};

export default Meta;

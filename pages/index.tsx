import * as React from 'react';
import type { NextPage } from 'next';
import styles from '/styles/Home.module.css';
import Head from 'next/head';
import Live2D from 'components/Common/Live2D';
import Script from 'next/script';

const Home: NextPage = () => {
  const title:string = 'Youko\'s Blog';
  return (
    <>
      <Head><title>{title}</title></Head>
      <Live2D />
      <div className={styles.container}>
        Youko Blog
      </div>
    </>
  );
};

export default Home;

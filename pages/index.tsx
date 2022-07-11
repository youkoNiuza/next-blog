import * as React from 'react';
import type { NextPage } from 'next';
import styles from '/styles/Home.module.css';
import Head from 'next/head';
import Live2D from 'components/Common/Live2D';
import Header from 'components/Home/Header';
import Banner from 'components/Home/Banner';
import Footer from 'components/Common/Footer';

const data:Hot[] = [
  {
    title: 'test',
    id: '1',
  },
  {
    title: 'test',
    id: '1',
  },
  {
    title: 'test',
    id: '1',
  },
];

const Home: NextPage = () => {
  const title:string = 'Youko\'s Blog';
  return (
    <>
      <Head><title>{title}</title></Head>
      <Header />
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <Banner data={data} />
      </div>
      <Live2D />
      <div className={styles.container}>
        Youko Blog
      </div>
      <Footer />
    </>
  );
};

export default Home;

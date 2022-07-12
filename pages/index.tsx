import * as React from 'react';
import Head from 'next/head';
import Live2D from 'components/Common/Live2D';
import Header from 'components/Common/Header';
import Banner from 'components/Home/Banner';
import Footer from 'components/Common/Footer';
import { getHome } from 'core/api/getHome';
import Hot from 'components/Home/Hot';
import New from 'components/Home/New';
interface HomePropsType {
  categories: Category[];
  articles: [];
  hots: Hot[];
  user: User;
}

const Home: (props: HomePropsType) => JSX.Element = ({ categories, articles, hots, user}) => {
  const title:string = 'Youko\'s Blog';
  return (
    <>
      <Head><title>{title}</title></Head>
      <Header user={user} categories={categories} />
      <Banner data={hots.slice(0, 3)} />
      <Hot hots={hots} />
      <New articles={articles} />
      <Footer />
      <Live2D />
    </>
  );
};

export async function getServerSideProps(){
  try {
    const data:Response = await getHome();
    return {
      props: data.json(),
    };
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      categories: [],
      articles: [],
      hots: [],
      user: null,
    }
  };
}

export default Home;

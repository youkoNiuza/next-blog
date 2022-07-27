import * as React from 'react';
import Head from 'next/head';
import Header from 'components/Common/Header';
import Banner from 'components/Home/Banner';
import Footer from 'components/Common/Footer';
import { fetchHome } from 'core/api/fetchHome';
import Hot from 'components/Home/Hot';
import New from 'components/Home/New';
interface HomePropsType {
  categories: Category[];
  articles: [];
  hots: Hot[];
  user: User;
}

const Home: (props: HomePropsType) => JSX.Element = ({ articles, hots, user, categories}) => {
  const title:string = 'Youko\'s Blog';
  return (
    <>
      <Head><title>{title}</title></Head>
      <Header user={user} categories={categories} />
      <main>
        <Banner data={hots.slice(0, 3)} />
        <Hot hots={hots} columns={3} rows={3} />
        <New articles={articles} />
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps(){
  try {
    const data:Response = await fetchHome();
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

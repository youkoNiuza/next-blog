import * as React from 'react';
import Head from 'next/head';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import Hot from 'components/Home/Hot';
import { fetchHots } from 'core/api/fetchHots';

interface HotArticlesPropsType {
  hots?: Hot[];
  user?: User;
  categories?: Category[];
}

const title = '全部热门文章';

const HotArticles:React.FC<HotArticlesPropsType> = ({hots, user, categories})=> <>
  <Head><title>{title}</title></Head>
  <Header categories={categories} user={user}/>
  <main><Hot hots={hots} title={title} titleDisabled={true} /></main>
  <Footer />
</>;

export async function getServerSideProps() {
  try {
    const fetchHotsResult = await fetchHots();
    const res = await fetchHotsResult.json();
    return {
      props: {
        ...res,
      },
    };
  } catch (error) {
    console.warn(error);
  }
  return {};
}

export default React.memo(HotArticles);

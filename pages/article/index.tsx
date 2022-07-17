import * as React from 'react';
import New from 'components/Home/New';
import Header from 'components/Common/Header';
import { fetchArticles } from 'core/api/fetchArticles';
import Head from 'next/head';
import Footer from 'components/Common/Footer';

interface ArticleListPropsType {
  articles?: Article[];
  categories?: Category[];
  user?: User;
}

const ArticleList:React.FC<ArticleListPropsType> = ({articles, categories, user}) => {
  return <>
    <Head><title>全部文章</title></Head>
    <Header categories={categories} user={user}/>
    <New title="全部文章" articles={articles} titleDisabled={true} />
    <Footer />
  </>;
};

export async function getServerSideProps() {
  const fetchArticlesResult = await fetchArticles();
  const res = await fetchArticlesResult.json();
  return {
    props: {
      ...res
    },
  };
};

export default React.memo(ArticleList);

import * as React from 'react';
import { GetServerSidePropsContext } from 'next';
import { fetchArticlesByKW } from 'core/api/fetchArticlesByKW';
import Header from 'components/Common/Header';
import Head from 'next/head';
import New from 'components/Home/New';
import Footer from 'components/Common/Footer';

interface SearchPagePropsType {
  categories: Category[],
  articles: Article[],
  keyword: string,
}

const SearchPage:React.FC<SearchPagePropsType> = ({categories, articles, keyword}) => {
  return (
    <>
      <Head><title>搜索结果：{keyword || ''}</title></Head>
      <Header categories={categories} />
      <main><New articles={articles} title={`搜索结果：${keyword || ''}`} titleDisabled /></main>
      <Footer />
    </>
  );
};

export const getServerSideProps = async (context:GetServerSidePropsContext) =>{
  try {
    const fetchArticlesByKWResult:Response = await fetchArticlesByKW(context?.query?.keyword);
    const res = await fetchArticlesByKWResult.json();
    return {
      props: {
        categories: res.categories,
        articles: res.articles,
        keyword: context.query?.keyword,
      },
    };
  } catch (error) {
    console.warn(error);
  }
  return {
    categories: [] as Category[],
    articles: [] as Article[],
    keyword: context.query?.keyword,
  };
};
export default SearchPage;

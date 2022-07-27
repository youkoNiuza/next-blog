import * as React from 'react';
import Head from 'next/head';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import New from 'components/Home/New';
import { GetServerSideProps } from 'next';
import { fetchCategoryList } from 'core/api/fetchCategoryList';

interface ArticlesInCategoryPropsType {
  articles?: Article[];
  category?: Category;
  categories?: Category[];
  user?: User;
}

const ArticlesInCategory:React.FC<ArticlesInCategoryPropsType> = ({articles, category, categories, user }) => {
  const title = category?.name || '';
  return (
    <>
      <Head><title>{title}</title></Head>
      <Header categories={categories} user={user} />
      <main><New articles={articles} title={`当前栏目：${title}`} titleDisabled={true} /></main>
      <Footer />
    </>
  );
};

export const getServerSideProps:GetServerSideProps = async (context) => {
  const id = context?.params?.id as string;
  const fetchCategoryListResult = await fetchCategoryList(id);
  const res = await fetchCategoryListResult.json();
  return {
    props: {
      ...res,
    }
  };
};

export default ArticlesInCategory;

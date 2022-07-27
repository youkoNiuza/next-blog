import { fetchArticleById } from 'core/api/fetchArticleById';
import * as React from 'react';
import Head from 'next/head';
import Footer from 'components/Common/Footer';
import Article from 'components/Common/Article';
import { GetServerSideProps } from 'next';
import Header from 'components/Common/Header';
import { fetchCategories } from 'core/api/fetchCategories';
import { fetchUser } from 'core/api/fetchUser';

interface ArticleDetailPropsType {
  article: Article;
  categories: Category[];
  user?: User;
  nxt?: Nxt;
  prev?: Prev;
}

const ArticleDetail:React.FC<ArticleDetailPropsType> = ({ article, nxt, prev, categories, user }) => {
  return (
    <>
      <Head><title>{article.title}</title></Head>
      <Header categories={categories} user={user}/>
      <main><Article article={article} nxt={nxt} prev={prev}/></main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ( { params } ) => {
  const id = params!.id as string | number;
  try {
    const fetchArticleByIdResult:Response = await fetchArticleById(id);
    const article = await fetchArticleByIdResult.json();
    const fetchCategoriesResult:Response = await fetchCategories();
    const categories = await fetchCategoriesResult.json();
    const fetchUserResult:Response = await fetchUser();
    const user = await fetchUserResult.json();
    return {
      props: {
        ...article,
        categories,
        user,
      }
    };
  } catch (error) {
    console.warn(error);
  }
  return {
    props: {
      article: {} as Article,
      categories: [] as Category[],
      user: null,
      nxt: {} as Nxt,
      prev: {} as Prev,
    }
  };
};

export default ArticleDetail;

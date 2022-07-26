import * as React from 'react';
import Head from 'next/head';
import Header from 'components/Common/Header';
import { fetchCategories } from 'core/api/fetchCategories';
import Footer from 'components/Common/Footer';
import Link from 'next/link';
interface CategoryListPropsType {
  categories: Category[];
  user?: User;
}

const CategoryList:React.FC<CategoryListPropsType> = ({categories, user}) => {
  return (
    <>
      <Head><title>全部栏目</title></Head>
      <Header categories={categories} user={user}/>
      <nav style={{minHeight: '90vh'}}>
        <h2 className="mb-4">全部栏目</h2>
        <ul>
          {categories && categories.map(c => <li key={c.id}><Link href={`list/${c.id}`}>{c.name}</Link></li>)}
        </ul>
      </nav>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const fetchCategoriesResult = await fetchCategories();
  const categories = await fetchCategoriesResult.json();
  return {
    props: {
      categories,
    },
  };
};

export default CategoryList;

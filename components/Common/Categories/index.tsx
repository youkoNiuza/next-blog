import * as React from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { fetchCategories } from 'core/api/fetchCategories';
interface CategoriesPropsTypes {
  categories?: Category[]
}

const Categories:React.FC<CategoriesPropsTypes> = (props) => {
  const { categories } = props;
  return <>
    {categories && categories.map((category:Category, index:number) => {
      return (
        <li className="nav-item" key={`${category.name}-${index}`} >
          <Link href="/list/[id]" as={`/list/${category.id}`} >
            <a className="nav-link">
              {category.name}
            </a>
          </Link>
        </li>
      );
    })}
  </>;
};

export default React.memo(Categories);

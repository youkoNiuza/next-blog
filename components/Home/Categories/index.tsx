import * as React from 'react';
import Link from 'next/link';

interface CategoriesPropsTypes {
  data: Category[]
}

const Categories:(props:CategoriesPropsTypes) => JSX.Element = (props) => {
  const { data } = props;
  return <>
    {data.map((category:Category, index:number) => {
      return (
        <li className="nav-item" key={`${category.name}-${index}`} >
          <Link href="/article/list/[id]" as={`/article/list/${category.id}`} >
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

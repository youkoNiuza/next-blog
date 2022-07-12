import * as React from 'react';
import Link from 'next/link';
import CommonCard from 'components/Common/Card/CommonCard';
import Card from 'components/Common/Card';
interface NewPropsType {
  articles: Article[];
}

const New:(props: NewPropsType) => JSX.Element = ({ articles = [] }) => {
  const renderPCCardList = () => {
    return (
      <div className="container mt-5 w-article">
        <Link href={'/article'}>
          <h2 className="mb-4" style={{cursor: 'pointer'}}>最新博文</h2>
        </Link>
        <div className="row row-cols-4">
          {articles &&
          articles.map(article => <CommonCard key={article.id} article={article} />)
          }
        </div>
      </div>
    );
  };

  const renderMobileCardList = () => {
    return (
      <div className="container mt-5 m-article">
        <Link href="articles/hots">
          <h2 className="mb-4" style={{cursor: 'pointer'}}>最新博文</h2>
        </Link>
        <div className="card-deck">
          {articles &&
          articles.map(article => <Card key={article.id} article={article} hideButton={true} />)
          }
        </div>
      </div>
    );
  };
  return (
    <>
      {renderPCCardList()}
      {renderMobileCardList()}
    </>
  );
};

export default React.memo(New);

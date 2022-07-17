import * as React from 'react';
import Link from 'next/link';
import CommonCard from 'components/Common/Card/CommonCard';
import Card from 'components/Common/Card';
interface NewPropsType {
  articles?: Article[];
  title?: string;
  titleDisabled?: boolean;
}

const New:(props: NewPropsType) => JSX.Element = ({ articles = [], title = '最新博文', titleDisabled = false }) => {
  const TitleLink = (disabled: boolean) => {
    const clickableLink = (
      <Link href={'article/list'}>
        <h2 className="mb-4" style={{cursor: 'pointer'}}>{title}</h2>
      </Link>
  );
    return disabled ? <h2 className="mb-4">{title}</h2> : clickableLink;
  };
  const renderPCCardList = () => {
    return (
      <div className="container mt-5 w-article">
        {TitleLink(titleDisabled)}
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
        {TitleLink(titleDisabled)}
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

import * as React from 'react';
import Card from 'components/Common/Card';
import Link from 'next/link';
interface HotPropsType {
  hots: Hot[];
  rows?: number;
  columns?: number;
}

const Hot:(props:HotPropsType)=>JSX.Element = ({ hots = [], rows = 4, columns = 3}) => {
  const renderArticlesRow = (articles: Hot[] = []) => {
    return (
      <>
        {articles &&
          articles.map(article =>
            <Card key={article.id} article={article} hideButton={false} />
          )
        }
      </>
    );
  };
  const renderRows = (hots: Hot[] = []) => {
    const rowsArr:JSX.Element[] = [];
    for(let start = 0; start < (rows * columns); start+=columns){
      rowsArr.push(<div key={`hot-article-row-${start}`} style={{marginTop: '2rem'}} className="card-deck">{renderArticlesRow(hots.slice(start, start+columns))}</div>);
    }
    return rowsArr;
  };
  return (
    <div className="container mt-5">
      <Link href="articles/hots">
        <h2 className="mb-4" style={{cursor: 'pointer'}}>热门推荐</h2>
      </Link>
      {hots && renderRows(hots)}
    </div>
  );
};

export default React.memo(Hot);

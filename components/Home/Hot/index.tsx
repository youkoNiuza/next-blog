import * as React from 'react';
import Card from 'components/Common/Card';
import Link from 'next/link';
interface HotPropsType {
  hots?: Hot[];
  rows?: number;
  columns?: number;
  title?: string;
  titleDisabled?: boolean;
}

const Hot:(props:HotPropsType)=>JSX.Element = ({ hots = [], columns = 3 ,rows, title = '热门推荐', titleDisabled = false}) => {
  rows = rows ? rows : Math.ceil(hots.length / columns);
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
    for(let start = 0; start < (rows! * columns); start+=columns){
      rowsArr.push(<div key={`hot-article-row-${start}`} style={{marginTop: '2rem'}} className="card-deck">{renderArticlesRow(hots.slice(start, start+columns))}</div>);
    }
    return rowsArr;
  };
  const TitleLink = (disabled: boolean) => {
    const clickableLink = (<Link href="article/hots">
      <h2 className="mb-4" style={{cursor: 'pointer'}}>{title}</h2>
    </Link>
  );
    return disabled ? <h2 className="mb-4">{title}</h2>: clickableLink;
  };
  return (
    <div className="container mt-5">
      {TitleLink(titleDisabled)}
      {hots && renderRows(hots)}
    </div>
  );
};

export default React.memo(Hot);

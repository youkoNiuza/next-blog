import * as React from 'react';
import PlaceHolderImage from 'components/Common/PlaceHolderImage';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface CardPropsType {
  article: Hot | Article;
  hideButton: boolean;
}

const Card:(props: CardPropsType) => JSX.Element = ({ article, hideButton }) => {
  const router = useRouter();
  return (
    <div className="card" onClick={() => router.push(`/article/${article.id}`)}>
      <PlaceHolderImage className="card-img-top" width="100%" height="200px" title={article.title} id={article.id} />
      <div className="card-body">
        <h5 className="card-title">
          {article.title}
        </h5>
        <p className="card-text"><small className="text-muted">
          {article.time.toLocaleString()}
        </small></p>
        <p className="card-text">
          {article.content.replace(/<[^>]+>/g, '').substring(0, 100)}...
        </p>
      </div>
      <div className="card-footer bg-white border-0" style={hideButton ? {display: 'none'} : {} }>
        <Link href="/article/[id]" as={`/article/${article.id}`}>
          <a className="btn btn-primary float-right stretched-link">查看详情</a>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Card);

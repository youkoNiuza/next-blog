import * as React from 'react';
import PlaceHolderImage from 'components/Common/PlaceHolderImage';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface CardPropsType {
  article: Hot | Article;
}

const CommonCard:(props: CardPropsType) => JSX.Element = ({ article }) => {
  const router = useRouter();
  return (
    <div className="col my-3" onClick={() => router.push(`/article/${article.id}`)}>
      <div className="card h-100">
        <PlaceHolderImage className="card-img-top" width="100%" height="150px" title={article.title} id={article.id} />
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
          <Link href={`/article/${article.id}`}><a className="stretched-link"></a></Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CommonCard);

import * as React from 'react';
import Card from 'components/Common/Card';
import Link from 'next/link';
interface HotPropsType {
  hots: Hot[];
}

const Hot:(props:HotPropsType)=>JSX.Element = ({ hots = [] }) => {
  return (
    <div className="container mt-5">
      <Link href="articles/hots">
        <h2 className="mb-4" style={{cursor: 'pointer'}}>热门推荐</h2>
      </Link>
      <div className="card-deck">
        {hots &&
        hots.map(hot => <Card key={hot.id} article={hot} hideButton={false} />)
        }
      </div>
    </div>
  );
};

export default React.memo(Hot);

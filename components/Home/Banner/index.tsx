import * as React from 'react';
import { useEffect, memo } from 'react';
import PlaceHolderImage from 'components/Common/PlaceHolderImage';
interface BannerPropsType {
  data: Hot[]
}

const Banner:(props: BannerPropsType) => JSX.Element = (props) => {
  const { data } = props;
  return (
    <>
      <div className="carousel-inner">
        {data.map((hot, index) => {
          return (
            <div key={`${hot.title}-${index}`} className= {`carousel-item ${index===1 ? 'active':''}`} onClick={()=>{}}>
              {/* <img data-src={`holder.js/100px400?text=${hot.title}&random=yes`}
                className="d-block w-100 banner-image" alt={hot.title} style={{width: '100px', height: '400px'}} /> */}
              <PlaceHolderImage height="400px" width="100%" title={hot.title} id={hot.id} />
            </div>
          );
        })}
      </div>
      {data.length > 1 &&
        <>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </>
      }
    </>
    );
};

export default memo(Banner);

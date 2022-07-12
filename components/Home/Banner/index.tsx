import * as React from 'react';
import PlaceHolderImage from 'components/Common/PlaceHolderImage';
interface BannerPropsType {
  data: Hot[]
}

const Banner:(props: BannerPropsType) => JSX.Element = (props) => {
  const { data } = props;
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {data.map((hot, index) => {
          return (
            <div key={`${hot.title}-${index}`} className= {`carousel-item ${index===1 ? 'active':''}`} onClick={()=>{}}>
              <PlaceHolderImage height="400px" width="100%" title={hot.title} id={hot.id} className="d-block w-100" />
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
    </div>
    );
};

export default React.memo(Banner);

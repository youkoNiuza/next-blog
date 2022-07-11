import * as React from 'react';
import Script from 'next/script';

const Scripts:React.FC = () => {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/holder/2.9.6/holder.min.js"></Script>
      <Script id="live2d-js" src="/live2d.js" onLoad={() => {
        // eslint-disable-next-line
        loadlive2d('live2d', '/live2D/model.json');
      }}></Script>
      <Script id="public-js" src="/public.js"></Script>
    </>
  );
};

export default Scripts;

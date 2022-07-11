import * as React from 'react';
import Script from 'next/script';

const Scripts:React.FC = () => {
  return (
    <>
      <Script id="live2d-js" src="/live2d.js" onLoad={() => {
        // @ts-ignore
        loadlive2d('live2d', '/live2D/model.json');
      }}></Script>
    </>
  );
};

export default Scripts;

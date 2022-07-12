import * as React from 'react';

const Live2D:React.FC = () => {
  return (
    <canvas className="live2d" id="live2d" width="150" height="400"></canvas>
  );
};

export default React.memo(Live2D);

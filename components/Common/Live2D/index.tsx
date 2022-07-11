import * as React from 'react';
import { useEffect } from 'react';

const Live2D:React.FC = () => {
  useEffect(() => {
  }, []);
  return (
    <canvas className="live2d" id="live2d" width="150" height="400"></canvas>
  );
};

export default  Live2D;

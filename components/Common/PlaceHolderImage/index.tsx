import * as React from 'react';
import { useRouter } from 'next/router';

interface PlaceholderImagePropsTypes {
  title: string;
  height: string;
  width: string;
  id: string;
}

const getRandomColor:() => string = () => {
  let colorStr='';
  const randomArr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  for(var i=0;i<6;i++){
    colorStr+=randomArr[Math.ceil(Math.random()*(15-0)+0)];
  }
  return colorStr;
};

/**
 * 16进制色值获取反色设置方法
 * @param  {String} oldColor 为16进制色值的字符串（例：'#000000'）
 * @return {String} 返回反色的色值（例：'#ffffff'）
 */
const getReverseColor: (oldColor:string) => string = (oldColor) => {
  oldColor = '0x' + oldColor.replace(/#/g, '');
  // @ts-ignore
  let str = '000000' + (0xFFFFFF - oldColor).toString(16);
  return '#'+ str.substring(str.length - 6, str.length);
};


const fontSize = (height:string) => {
  if(height.includes('%')){
    return '';
  }
  let numHeight = parseInt(height.replace('px', ''));
  return Math.floor(numHeight / 5)+'px';
};

const PlaceholderImage:(props:PlaceholderImagePropsTypes) => JSX.Element = (props) => {
  const { title, height, width, id } = props;
  const randomColor = getRandomColor();
  const router = useRouter();
  const style = {
    height,
    width,
    lineHeight: height,
    textAlign: 'center',
    backgroundColor: `#${randomColor}`,
    color: getReverseColor(randomColor),
    display: 'inline-block',
    fontSize: fontSize(height),
  };
  // @ts-ignore
  return <div style={style} onClick={() => router.push(`article/${id}`)}>{title}</div>;
};

export default React.memo(PlaceholderImage);

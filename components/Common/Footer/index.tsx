import * as React from 'react';

const Footer:React.FC = () => {
  return (
    <footer className="bg-dark p-3 mt-3  text-center text-secondary small" style={{flex: '0 0 auto', height: '60px', lineHeight: '28px', boxSizing: 'border-box'}}>
      <a href="https://beian.miit.gov.cn/" className="text-secondary small">蜀ICP备2022004093号-1</a>
    </footer>
  );
};

export default React.memo(Footer);

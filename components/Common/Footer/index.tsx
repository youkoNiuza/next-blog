import * as React from 'react';

const Footer:React.FC = () => {
  return (
    <footer className="bg-dark p-3 mt-3  text-center text-secondary small" style={{position: 'absolute', display: 'block', left: 0, bottom: 0, right: 0}}>
      <a href="https://beian.miit.gov.cn/" className="text-secondary small">蜀ICP备2022004093号-1</a>
    </footer>
  );
};

export default React.memo(Footer);

import * as React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { fetchCategories } from 'core/api/fetchCategories';

// 只在服务端渲染
class MyDocument extends Document {
  // 数据预请求
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* 禁止iphone点击数字自动拨号 */}
          <meta name="format-detection" content="telephone=no"></meta>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
          {/* 网站描述信息 */}
          <meta name="keywords" content="Youko"></meta>
          <meta lang="zh-CN" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" />
        </Head>
        <body className="bg-light total-container">
          {/* 内容容器 */}
          <Main />
          {/* 插入脚本 */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export async function getInitialProps() {
  try {
    const fetchCategoriesResult = await fetchCategories();
    const categories = await fetchCategoriesResult.json();
    return {
      props: {
        categories,
      },
    };
  } catch (error) {
    console.warn(error);
  }
};

export default MyDocument;

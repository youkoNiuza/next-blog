import * as React from 'react';
import Link from 'next/link';

interface ArticlePropsType {
  article: Article;
  prev?: Prev;
  nxt?: Nxt;
}

const Article:React.FC<ArticlePropsType> = ({article, prev, nxt}) => {
  const imgArr = article?.content?.match(/\/?upload\/\w+\.\w+/g);
  let articleContent = article?.content;
  if(imgArr?.length){
    for(const imgSrc of imgArr){
      articleContent = articleContent.replace(imgSrc, `https://www.qzzhai.top${imgSrc}`);
    }
  }
  return (
    <div className="container mt-4">
      <nav>
        <ol className="breadcrumb bg-white">
          <li className="breadcrumb-item"><Link href="/">首页</Link></li>
          <li className="breadcrumb-item"><a href={`/list/${ article.category_id }`}>{ article.name } </a></li>
          <li className="breadcrumb-item active">{ article.title } </li>
        </ol>
      </nav>
      <div className="card content">
        <div className="card-header bg-white">
          <h3 className="card-title m-0">{ article.title }</h3>
          <p className="text-muted small mt-2 m-0">
            <span className="mr-3">发表时间：{ article.time.toLocaleString() }</span>
            <span className="mr-3">最后编辑：{ article.editTime.toLocaleString() }</span>
            <span className="mr-1">点击：{ article.hits }</span>
          </p>
        </div>
        <article className="card-body" dangerouslySetInnerHTML={{__html: articleContent}}></article>
      </div>
      <nav>
        <ul className="pagination mt-3">
          <>
            {prev &&
              (
                <li className="page-item">
                  <Link href={`/article/${prev.id}`}><span className="page-link">上一篇：{prev.title}</span></Link>
                </li>
              )
            }
          </>
          <>
            {prev &&
              (
              <li className="page-item ml-auto">
                <Link href={`/article/${prev.id}`}><span className="page-link">下一篇：{prev.title}</span></Link>
              </li>
              )
            }
          </>
        </ul>
      </nav>
    </div>
  );
};

export default React.memo(Article);

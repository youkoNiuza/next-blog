import { PORT } from 'core/env';

export async function fetchArticlesByKW(kw: string | string[] | undefined){
  return fetch(`http://localhost:${PORT}/api/search?keyword=${kw}`);
}

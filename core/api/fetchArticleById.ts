import { PORT } from 'core/env';

export async function fetchArticleById(id:number | string){
  return fetch(`http://localhost:${PORT}/api/article/${id}`);
}

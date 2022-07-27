import { PORT } from 'core/env';

export async function fetchArticles(){
  return fetch(`http://localhost:${PORT}/api/articles`);
}

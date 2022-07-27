import { PORT } from 'core/env';

export async function fetchCategoryList(id:number | string){
  return fetch(`http://localhost:${PORT}/api/list/${id}`);
}

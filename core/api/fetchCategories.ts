import { PORT } from 'core/env';

export async function fetchCategories(){
  return fetch(`http://localhost:${PORT}/api/categories`);
}

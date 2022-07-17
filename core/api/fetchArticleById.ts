export async function fetchArticleById(id:number | string){
  return fetch(`http://localhost:52000/api/article/${id}`);
}

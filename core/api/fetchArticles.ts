export async function fetchArticles(){
  return fetch('http://localhost:52000/api/articles');
}

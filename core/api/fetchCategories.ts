export async function fetchCategories(){
  return fetch('http://localhost:52000/api/categories');
}

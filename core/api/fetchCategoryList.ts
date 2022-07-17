export async function fetchCategoryList(id:number | string){
  return fetch(`http://localhost:52000/api/list/${id}`);
}

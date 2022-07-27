import { PORT } from 'core/env';

export async function fetchHome(){
  return fetch(`http://localhost:${PORT}/api/home`);
}

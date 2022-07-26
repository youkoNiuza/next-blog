import { PORT } from 'core/env';

export async function fetchHots(){
  return fetch(`http://localhost:${PORT}/api/hots`);
}

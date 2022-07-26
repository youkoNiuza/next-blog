import { PORT } from 'core/env';

export function fetchUser(){
  return fetch(`http://localhost:${PORT}/api/user`);
};

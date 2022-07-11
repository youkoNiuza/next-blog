interface User {
  username: string;
}

interface Category {
  name: string;
  id: string;
}

interface Hot {
  title: string;
  id: string;
  thumbnail?: string;
}

interface Data {
  user?: User;
  categories: Category[];
}

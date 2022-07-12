interface User {
  username: string;
}

interface Category {
  name: string;
  id: string;
}

interface Hot {
  title: string;
  id: number;
  thumbnail?: string;
  time: Date;
  content: string;
}

interface Article {
  title: string;
  id: number;
  thumbnail?: string;
  time: Date;
  content: string;
}

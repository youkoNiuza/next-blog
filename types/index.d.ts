interface User {
  username: string;
}

interface Category {
  name: string;
  id: string;
  index: number;
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
  name: string;
  hot: number;
  category_id: number;
  editTime: Date;
  hits: number;
}

interface Prev {
  id: Article.id;
  title: Article.title;
}

interface Nxt {
  id: Article.id;
  title: Article.title;
}

interface PublicData{
  categories?: Category[];
  user?: User;
}

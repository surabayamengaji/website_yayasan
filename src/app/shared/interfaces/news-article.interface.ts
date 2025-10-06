export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: {
    name: string;
    color: string;
  };
  date: string;
  slug: string;
  featured?: boolean;
}

export interface ArticleCategory {
  name: string;
  color: string;
}

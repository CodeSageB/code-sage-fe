export interface Blog {
  id: string;
  title: string;
  content: string;
  tags: string[];
  created: Date;
}

export interface BlogState {
  blogs: Blog[];
  loading: boolean;
}

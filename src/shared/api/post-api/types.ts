export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CreatePostRequest {
  userId: number;
  title: string;
  body: string;
  file?: Blob;
}

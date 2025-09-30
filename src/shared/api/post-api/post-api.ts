import { $host } from "../host";
import { CreatePostRequest, Post } from "./types";

export async function getPosts(): Promise<Post[]> {
  const response = await $host.get<Post[]>("posts");
  return response.data;
}

export async function getPostsCasheNoStore(): Promise<Post[]> {
  const response = await $host.get<Post[]>("posts", {
    headers: {
      "Cache-Control": "no-store",
      Pragma: "no-cache",
    },
  });
  return response.data;
}

export const createPost = async (postData: CreatePostRequest) => {
  const formData = new FormData();
  formData.append("userId", String(postData.userId));
  formData.append("title", postData.title);
  if (postData.file) {
    formData.append("file", postData.file);
  }

  const { data } = await $host.post<Post>("posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

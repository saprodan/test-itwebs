import { $host } from "../host";
import { Comment } from "./types";

export async function getComments(postId: number): Promise<Comment[]> {
  const response = await $host.get<Comment[]>(`posts/${postId}/comments`);
  return response.data;
}

import { $host } from "../host";
import { Todo } from "./types";

export async function getTodos(userId: number): Promise<Todo[]> {
  const response = await $host.get<Todo[]>(`todos?userId=${userId}`);
  return response.data;
}

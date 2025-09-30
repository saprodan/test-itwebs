import { getComments } from "@/src/shared/api";
import styles from "./comments-list.module.scss";

export async function CommentsList({ postId }: { postId: number }) {
  let comments;

  try {
    comments = await getComments(postId);
  } catch (error) {
    console.log(error);
    return (
      <div className="container">
        Не удалось загрузить список комментариев с ресурса jsonplaceholder.com
      </div>
    );
  }

  return (
    <div className={styles.comments}>
      <h2 className={styles.comments__title}>Comments</h2>
      <ul className={styles.comments__list}>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

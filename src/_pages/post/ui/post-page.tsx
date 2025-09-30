import { getPosts, Post } from "@/src/shared/api";
import { CommentsList } from "./comments-list";
import styles from "./post-page.module.scss";

export async function generateStaticParams() {
  let posts;
  try {
    posts = await getPosts();
  } catch (error) {
    console.log("Error fetching while generate post pages");
    console.log(error);
    return [];
  }

  return posts.map((post) => ({ id: String(post.id) }));
}

export async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) {
      return (
        <div className="container">
          Ошибка загрузки данных с jsonplaceholder.com: {res.status}
        </div>
      );
    }
    const post = (await res.json()) as Post;
    return (
      <div className="container">
        <main className={styles.main}>
          <p className={styles.note}>
            SSG: страница сгенерирована во время сборки приложения
          </p>
          <h1 className={styles.title}>{post.title}</h1>

          <p className={styles.body}>{post.body}</p>

          <CommentsList postId={post.id} />
        </main>
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="container">
        Не удалось установить соединение с ресурсом jsonplaceholder.com
      </div>
    );
  }
}

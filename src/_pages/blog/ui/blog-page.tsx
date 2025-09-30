import Link from "next/link";
import { getPostsCasheNoStore } from "@/src/shared/api";
import styles from "./blog-page.module.scss";

export async function BlogPage() {
  let posts;

  try {
    posts = await getPostsCasheNoStore();
  } catch (error) {
    console.log(error);
    return (
      <div className="container">
        Не удалось загрузить список постов с ресурса jsonplaceholder.com
      </div>
    );
  }

  return (
    <div className="container">
      <main className={styles.main}>
        <p className={styles.note}>
          SSR: рендер страницы и загрузка постов выполняется на сервере при
          каждом запросе
        </p>
        <h1 className={styles.title}>Blog</h1>

        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`blog/${post.id}`} className={styles.post}>
                <p className={styles.post__title}>{post.title}</p>
                <p className={styles.post__body}>{post.body}</p>
                <p className={styles.post__more}>Read more...</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

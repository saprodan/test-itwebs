import Link from "next/link";
import styles from "./home-page.module.scss";

export function HomePage() {
  return (
    <div className="container">
      <main className={styles.main}>
        <h1 className={styles.title}>Приветствую!</h1>
        <p>Данный проект является тестовым заданием для ITWEBS.</p>

        <ul className={styles.info}>
          <li>
            <p>
              <Link href="/blog" className={styles.link}>
                <span>Блог</span>
              </Link>
              - страница рендерится сервере при каждом запросе (SSR). Страница
              каждого поста сгенерирована при сборке (SSG)
            </p>
          </li>
          <li>
            <p>
              <Link href="/isr-page" className={styles.link}>
                <span>ISR-page</span>
              </Link>
              - страница генерируется заново на сервере, если прошло время
              ревалидации (15 сек)
            </p>
          </li>
          <li>
            <p>
              <Link href="csr-page" className={styles.link}>
                <span>CSR-page</span>
              </Link>
              - страница полностью рендерится на клиенте. Для полноценного CSR
              используется импорт с помощью next/dynamic с параметро ssr = false
            </p>
          </li>
        </ul>
        <p>
          Используемый стек: React 19, TypeScript, Next.js 15 (App Router),
          axios, react-hook-form, FSD (архитектура).
        </p>
      </main>
    </div>
  );
}

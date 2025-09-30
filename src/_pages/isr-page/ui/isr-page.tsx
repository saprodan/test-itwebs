import styles from "./isr-page.module.scss";

export async function ISRPage() {
  return (
    <div className="container">
      <main className={styles.main}>
        <h1 className={styles.title}>Incremental Static Regeneration</h1>

        <p>Это ISR-страница. Она устаревает каждые 15 секунд. </p>
        <p>
          Время генерации: <b>{new Date().toLocaleTimeString()}</b>
        </p>
      </main>
    </div>
  );
}

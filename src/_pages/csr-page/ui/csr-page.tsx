"use client";
import { useEffect, useState } from "react";

import { getTodos, Todo } from "@/src/shared/api";
import { Icon } from "@/src/shared/ui/icons";
import styles from "./csr-page.module.scss";

export default function CSRPage() {
  const [todos, setTodos] = useState<Array<Todo>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();

  console.log("CSR rendering!");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos = await getTodos(1); //
        setTodos(todos);
      } catch (err) {
        console.log(err);
        setError("Ошибка загрузки todo списка");
      } finally {
        // Чтобы спиннер не моргал при быстрой загрузке
        setTimeout(() => setLoading(false), 1500);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (id: number) => {
    const newTodos = todos?.map((todo) => {
      return todo.id == id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(newTodos);
  };

  let content;
  if (loading) {
    content = (
      <div className={styles.loader}>
        <Icon icon="spinner" height={150} width={150} />
      </div>
    );
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = (
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id} className={styles.todo}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
              className={styles.checkbox}
            />
            {todo.title}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="container">
      <main className={styles.main}>
        <h1 className={styles.title}>Client Side Rendering</h1>
        <p>Это СSR-страница. Рендер в браузере </p>
        <div className={styles.content}>{content}</div>
      </main>
    </div>
  );
}

"use client";

import { useCallback, useEffect } from "react";

/**
 * Кастомый хук useClickOutside предназначен для отслеживания кликов вне элемента,
 * подойдет для модальных окон
 * @param ref - компонент который мы отслеживаем, используйте useRef
 * @param callback - callback, который отработает при клике вне элемента,
 *  подразумевается что это будет функция отвечаюзее за скрытие элемента
 */
export const useClickOutside = (
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void
) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, handleClick]);
};

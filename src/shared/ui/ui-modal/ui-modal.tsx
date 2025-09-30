"use client";

import { ModalProps } from "./ui-modal.props";
import { useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

import { useClickOutside } from "../../hooks";
import { Icon } from "../icons";
import { UiButton } from "@/src/shared/ui";
import styles from "./ui-modal.module.scss";

const backgroundAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const contentAnimation = {
  hidden: {
    x: 10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

/**
 * Компонент модального окна
 * При создании нужен простой стэйт на булевое значение,
 * отвечающий за открытое/закрытое состояние модального окна
 * свойства children, isVisible, onClose обязательны
 * @example  {isAuthVisible && (
        <Modal isVisible={isAuthVisible} onClose={handlerCloseModalAuth}>
          'Здесь ваш контент'
        </Modal>
 * @param onClose - коллбек на закрытие модального окна 
 * @param isVisible - булевое значение сотояния модального окна
 * @param isButtonClose - если вы хотите модальное окно без кнопки закрытия(крестика) то установите это значение в false
 * @param className - дополнительный класс на контейнер содержимого(внутри него будут children)
 * @param stylesButtonClose - прокидывает допольнительные стили на крестик, рекомендуется для того чтобы его подвинуть по макету
 * @param children - Внутреннее содержимое кнопки
 * @returns модальное окно
 */
export function UiModal({
  children,
  className = "",
  isVisible,
  onClose,
  isButtonClose = true,
  stylesButtonClose = "",
}: ModalProps) {
  const contentRef = useRef(null);

  useClickOutside(contentRef, onClose);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          transition={{ duration: 0.2 }}
          initial={backgroundAnimation.hidden}
          whileInView={backgroundAnimation.visible}
          exit={backgroundAnimation.hidden}
          className={styles.modal}
        >
          <motion.div
            transition={{ duration: 0.2 }}
            initial={contentAnimation.hidden}
            whileInView={contentAnimation.visible}
            exit={contentAnimation.hidden}
            className={styles.modal__content}
          >
            <motion.div
              transition={{ duration: 0.2 }}
              initial={contentAnimation.hidden}
              whileInView={contentAnimation.visible}
              exit={contentAnimation.hidden}
              className={clsx(styles.modal__body, className)}
              ref={contentRef}
            >
              {isButtonClose && (
                <UiButton
                  className={clsx(styles.modal__btn, stylesButtonClose)}
                  onClick={onClose}
                >
                  <Icon icon="close" />
                </UiButton>
              )}
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

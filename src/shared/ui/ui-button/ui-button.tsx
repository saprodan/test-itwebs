"use client";

import clsx from "clsx";
import { UiButtonProps } from "./ui-button.props";

import styles from "./ui-button.module.scss";

export const UiButton = (props: UiButtonProps) => {
  const { className, children, transparent, clear, fill, ...rest } = props;

  const classNames = clsx(
    styles.button,
    fill && styles["button-fill"],
    transparent && styles["button-transparent"],
    clear && styles["button-clear"],
    className
  );

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

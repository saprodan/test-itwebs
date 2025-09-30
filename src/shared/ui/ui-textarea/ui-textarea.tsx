import clsx from "clsx";
import { useId } from "react";
import { UiTextAreaPropsType } from "./ui-textarea.props";

import styles from "./ui-textarea.module.scss";

export function UiTextArea({
  className,
  required = false,
  label,
  error,
  inputProps,
}: UiTextAreaPropsType) {
  const id = useId(); // помогает связать лейбл и инпут, подходит для SSR
  return (
    <div className={styles.row}>
      {label && (
        <label className="block" id={id}>
          {required ? label + "*" : label}
        </label>
      )}
      {/*id в конце, чтобы нельзя было переопределить снаружи */}
      <textarea
        {...inputProps}
        id={id}
        className={clsx(className, styles.field, error && styles.field_error)}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

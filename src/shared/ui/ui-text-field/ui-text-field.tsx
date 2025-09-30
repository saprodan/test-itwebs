import clsx from "clsx";
import { useId } from "react";
import { UiTextFieldPropsType } from "./ui-text-field.props";

import styles from "./ui-text-field.module.scss";

export function UiTextField({
  className,
  required = false,
  label,
  error,
  inputProps,
}: UiTextFieldPropsType) {
  const id = useId(); // помогает связать лейбл и инпут, подходит для SSR
  return (
    <div className={styles.row}>
      {label && (
        <label className="block" id={id}>
          {required ? label + "*" : label}
        </label>
      )}
      {/*id в конце, чтобы нельзя было переопределить снаружи */}
      <input
        {...inputProps}
        id={id}
        className={clsx(className, styles.field, error && styles.field_error)}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

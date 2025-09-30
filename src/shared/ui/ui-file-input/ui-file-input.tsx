import clsx from "clsx";
import { useId } from "react";
import { UiFilePropsType } from "./ui-file-input.props";

import styles from "./ui-file-input.module.scss";

export function UiFileInput({
  className,
  required = false,
  label,
  error,
  inputProps,
}: UiFilePropsType) {
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
        type="file"
        className={clsx(className, styles.field, error && styles.field_error)}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

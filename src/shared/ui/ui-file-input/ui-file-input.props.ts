import { ComponentPropsWithRef } from "react";

export interface UiFilePropsType {
  className?: string;
  label?: string;
  error?: string;
  required?: boolean;
  inputProps?: ComponentPropsWithRef<"input">;
}

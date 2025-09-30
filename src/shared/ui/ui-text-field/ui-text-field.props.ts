import { ComponentPropsWithRef } from "react";

export interface UiTextFieldPropsType {
  className?: string;
  label?: string;
  error?: string;
  required?: boolean;
  inputProps?: ComponentPropsWithRef<"input">;
}

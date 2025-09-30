import { ComponentPropsWithRef } from "react";

export interface UiTextAreaPropsType {
  className?: string;
  label?: string;
  error?: string;
  required?: boolean;
  inputProps?: ComponentPropsWithRef<"textarea">;
}

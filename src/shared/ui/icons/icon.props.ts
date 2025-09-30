import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconName;
}

export type IconName =
  | "close"
  | "home"
  | "info"
  | "like"
  | "logo"
  | "message"
  | "profile"
  | "spinner";

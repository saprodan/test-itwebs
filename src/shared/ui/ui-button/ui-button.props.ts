interface BaseProps {
  children: React.ReactNode;
  fill?: boolean;
  transparent?: boolean;
  clear?: boolean;
  className?: string;
}

export type UiButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

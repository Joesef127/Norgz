import type { ReactNode } from "react";

export type ButtonTypes = {
  icon?: string;
  className?: string;
  isImage?: boolean;
  route?: string;
  children?: ReactNode;
  iconStyle?: string;
  onClick?: () => void;
  customStyle?: string;
};
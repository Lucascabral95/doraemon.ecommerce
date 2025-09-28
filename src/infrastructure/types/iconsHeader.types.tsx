export interface IconHeaderProps {
  viewBox: string;
  path: string;
  width: number;
  height: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: string | number;
  strokeLinecap?: "butt" | "round" | "square";
  strokeLinejoin?: "arcs" | "bevel" | "miter" | "miter-clip" | "round";
}

export interface IconSvgSet {
  dropdown: IconHeaderProps;
  search: IconHeaderProps;
  user: IconHeaderProps;
  cart: IconHeaderProps;
  hamburger: IconHeaderProps;
  close: IconHeaderProps;
  language: IconHeaderProps;
}

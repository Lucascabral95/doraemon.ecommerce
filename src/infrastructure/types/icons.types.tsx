export interface SvgIcon {
  viewBox: string;
  path: string;
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

export interface IconSet {
  dropdown: SvgIcon;
  search: SvgIcon;
  user: SvgIcon;
  cart: SvgIcon;
  hamburger: SvgIcon;
  close: SvgIcon;
  language: SvgIcon;
}

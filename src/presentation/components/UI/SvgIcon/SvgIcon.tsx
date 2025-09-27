import React from "react";
import { SvgIcon as SvgIconType } from "../../../../infrastructure/types/icons.types";

interface SvgIconProps extends SvgIconType {
  onClick?: () => void;
  style?: React.CSSProperties;
  id?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  viewBox,
  path,
  width = 24,
  height = 24,
  fill = "#009FE3",
  className = "",
  onClick,
  style,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      onClick={onClick}
      style={style}
      overflow="visible"
    >
      <path d={path} />
    </svg>
  );
};

export default SvgIcon;

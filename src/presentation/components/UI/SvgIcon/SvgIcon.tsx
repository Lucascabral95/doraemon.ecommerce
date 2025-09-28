import React from "react";
import { IconHeaderProps } from "../../../../infrastructure/types";

interface SvgIconProps extends Partial<IconHeaderProps> {
  className?: string;
  id?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  viewBox,
  path,
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  strokeLinecap,
  className,
  id,
  onClick,
  style,
}) => {
  return (
    <svg
      className={className}
      id={id}
      viewBox={viewBox}
      width={width}
      height={height}
      onClick={onClick}
      style={style}
      fill={stroke ? "none" : fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
    >
      <path d={path} />
    </svg>
  );
};

export default SvgIcon;

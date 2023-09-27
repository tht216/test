import * as React from "react";
import cn from "classnames";

type ITitleColor = "zinc-800" | "zinc-700" | "blue" | "white";
type ITitleSize = "5xl" | "4xl" | "lg";
type ITitleAlign = "center" | "left";

export interface ITitleProps {
  children?: React.ReactNode;
  color?: ITitleColor;
  size?: ITitleSize;
  align?: ITitleAlign;
  className?: string;
}

const Title: React.FC<ITitleProps> = ({
  children,
  color = "zinc-800",
  size = "lg",
  align = "center",
  className = "",
}) => {
  const SIZE_MAPPING = {
    "5xl": "text-5xl leading-[3.9375rem]",
    "4xl": "text-4xl leading-[2.5rem]",
    lg: "text-lg leading-[2.5rem]",
  } as const;

  const COLOR_MAPPING = {
    "zinc-800": "text-zinc-800 font-bold",
    "zinc-700": "text-zinc-700 font-bold",
    blue: "text-blue-500 font-bold",
    white: "text-white font-bold",
  } as const;

  const ALIGN_MAPPING = {
    center: "text-center",
    left: "text-left",
  } as const;

  const SIZE_5XL_HEADING = (
    <h1
      className={cn(
        className,
        SIZE_MAPPING[size],
        COLOR_MAPPING[color],
        ALIGN_MAPPING[align]
      )}
    >
      {children}
    </h1>
  );

  const SIZE_4XL_HEADING = (
    <h2
      className={cn(
        className,
        SIZE_MAPPING[size],
        COLOR_MAPPING[color],
        ALIGN_MAPPING[align]
      )}
    >
      {children}
    </h2>
  );

  const SIZE_SMALL_HEADING = (
    <h3
      className={cn(
        className,
        SIZE_MAPPING[size],
        COLOR_MAPPING[color],
        ALIGN_MAPPING[align]
      )}
    >
      {children}
    </h3>
  );

  const HEADING_MAPPING_BY_SIZE = {
    "5xl": SIZE_5XL_HEADING,
    "4xl": SIZE_4XL_HEADING,
    lg: SIZE_SMALL_HEADING,
  } as const;

  return HEADING_MAPPING_BY_SIZE[size];
};

export default Title;

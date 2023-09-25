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
    "5xl": "text-5xl",
    "4xl": "text-4xl",
    lg: "text-lg",
  } as const;

  const COLOR_MAPPING = {
    "zinc-800": "text-zinc-800",
    "zinc-700": "text-zinc-700",
    blue: "text-blue-500",
    white: "text-white",
  } as const;

  const ALIGN_MAPPING = {
    center: "text-center",
    left: "text-left",
  } as const;

  switch (size) {
    case "5xl":
      return (
        <h1
          className={cn(
            className,
            SIZE_MAPPING[size],
            COLOR_MAPPING[color],
            ALIGN_MAPPING[align],
          )}
        >
          {children}
        </h1>
      );
    case "4xl":
      return (
        <h2
          className={cn(
            className,
            SIZE_MAPPING[size],
            COLOR_MAPPING[color],
            ALIGN_MAPPING[align],
          )}
        >
          {children}
        </h2>
      );
    default:
      return (
        <h3
          className={cn(
            className,
            SIZE_MAPPING[size],
            COLOR_MAPPING[color],
            ALIGN_MAPPING[align],
          )}
        >
          {children}
        </h3>
      );
  }
};

export default Title;

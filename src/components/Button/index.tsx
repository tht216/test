import * as React from "react";
import cn from "classnames";
import Link from "next/link";

type IButtonColor = "blue" | "white";
type IButtonSize = "sm" | "lg";

export interface IButtonProps {
  children?: React.ReactNode;
  color?: IButtonColor;
  size?: IButtonSize;
  className?: string;
  href: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  color = "blue",
  size = "lg",
  className = "",
  href = "",
}) => {
  const SIZE_MAPPING = {
    sm: "w-[8.75rem] h-[3.25rem] rounded-md text-lg leading-[1.125rem] flex items-center justify-center",
    lg: "w-[19.875rem] h-[5.5rem] rounded-[0.625rem] text-2xl leading-[3.9375rem] flex items-center justify-center",
  } as const;

  const COLOR_MAPPING = {
    blue: "text-white font-bold bg-gradient-blue",
    white: "text-center text-blue-500 font-bold bg-gradient-blue",
  } as const;

  const BORDER_GRADIENT_MAPPING = {
    gradient: "bg-gradient-blue p-0.5",
    sm: "rounded-md",
    lg: "rounded-[0.625rem]",
  };

  return color === "blue" ? (
    <Link
      className={cn(className, COLOR_MAPPING[color], SIZE_MAPPING[size])}
      href={href}
    >
      {children}
    </Link>
  ) : (
    <div
      className={cn(
        className,
        BORDER_GRADIENT_MAPPING["gradient"],
        SIZE_MAPPING[size],
        COLOR_MAPPING[color]
      )}
    >
      <Link
        className={cn(
          BORDER_GRADIENT_MAPPING[size],
          "bg-white w-full h-full items-center justify-center flex"
        )}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
};

export default Button;

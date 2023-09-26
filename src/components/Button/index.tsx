import * as React from "react";
import cn from "classnames";

type IButtonColor = "blue" | "white" | "gray";
type IButtonSize = "xs" | "sm" | "lg";

export interface IButtonProps {
  children?: React.ReactNode;
  color?: IButtonColor;
  size?: IButtonSize;
  className?: string;
  disable?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  children,
  color = "blue",
  size = "lg",
  className = "",
  disable = false,
  onClick,
}) => {
  const SIZE_MAPPING = {
    xs: "w-[8.75rem] h-[3.25rem] rounded-md text-[0.8125rem] leading-normal font-medium flex items-center justify-center text-center",
    sm: "w-[8.75rem] h-[3.25rem] rounded-md text-lg leading-[1.125rem] font-bold flex items-center justify-center text-center",
    lg: "w-[19.875rem] h-[5.5rem] rounded-[0.625rem] text-2xl leading-[3.9375rem] font-bold flex items-center justify-center text-center",
  } as const;

  const COLOR_MAPPING = {
    blue: "text-white bg-gradient-blue",
    white: "text-blue-500 bg-gradient-blue",
    gray: "text-zinc-800 bg-gray-200",
  } as const;

  const BORDER_GRADIENT_MAPPING = {
    gradient: "bg-gradient-blue p-0.5",
    xs: "rounded-md",
    sm: "rounded-md",
    lg: "rounded-[0.625rem]",
  };

  return color === "white" ? (
    <div
      className={cn(
        className,
        disable ? "bg-gradient-blue-white" : "",
        BORDER_GRADIENT_MAPPING["gradient"],
        SIZE_MAPPING[size],
        COLOR_MAPPING[color]
      )}
    >
      <button
        className={cn(
          disable ? "bg-gradient-blue-white" : "",
          BORDER_GRADIENT_MAPPING[size],
          "bg-white w-full h-full items-center justify-center flex"
        )}
        onClick={onClick}
        disabled={disable}
      >
        {children}
      </button>
    </div>
  ) : (
    <button
      className={cn(
        className,
        disable ? "bg-gradient-blue-white" : "",
        COLOR_MAPPING[color],
        SIZE_MAPPING[size]
      )}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;

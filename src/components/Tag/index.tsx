import * as React from "react";
import cn from "classnames";

type ITagColor = "green" | "red";

export interface ITagProps {
  children?: React.ReactNode;
  color?: ITagColor;
  filled?: boolean;
  className?: string;
}

const Tag: React.FC<ITagProps> = ({
  children,
  color = "green",
  filled = true,
  className = "",
}) => {
  const COLOR_FILLED_MAPPING = {
    green: "bg-green-400",
    red: "bg-red-400",
  } as const;

  const COLOR_MAPPING = {
    green: "text-green-400",
    red: "text-red-400",
  } as const;

  return filled ? (
    <span
      className={cn(
        className,
        COLOR_FILLED_MAPPING[color],
        "py-[0.19rem] px-[0.37rem] rounded justify-center items-center inline-flex"
      )}
    >
      <p className="text-white text-xs font-medium">{children}</p>
    </span>
  ) : (
    <div className={className}>
      <span className={cn(COLOR_MAPPING[color], "text-sm italic")}>
        {children}
      </span>
    </div>
  );
};

export default Tag;

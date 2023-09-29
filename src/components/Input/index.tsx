import type { FC, HTMLInputTypeAttribute } from "react";
import cn from "classnames";
import React from "react";

type IInputColor = "slate-100" | "neutral-50" | "white";
type IInputSize = "sm" | "lg";
type IInputAlign = "center" | "left";

interface Props {
  className?: string;
  type?: HTMLInputTypeAttribute | "select" | "textarea";
  isError?: boolean;
  placeholder?: string;
  name: string;
  id: string;
  color?: IInputColor;
  size?: IInputSize;
  disabled: boolean;
  options?: Array<string>;
  align?: IInputAlign;
}

const Input: FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className = "",
      type = "text",
      placeholder = "",
      name = "",
      id = "",
      isError = false,
      color = "slate-100",
      size = "sm",
      disabled = false,
      options = [""],
      align = "left",
      ...props
    },
    ref
  ) => {
    const COLOR_MAPPING = {
      "slate-100": "bg-slate-100 placeholder:text-slate-500 ",
      "neutral-50":
        "bg-neutral-50 border border-stone-300 placeholder:text-neutral-400",
      white: "bg-white border border-zinc-400 placeholder:text-slate-500",
    };

    const SIZE_MAPPING = {
      sm: "text-[0.8125rem]",
      lg: "text-sm",
    };

    const ALIGN_MAPPING = {
      center: "text-center",
      left: "text-left",
    };

    const SEARCH_SIZE_MAPPING = {
      sm: "bg-search bg-left-0.68 bg-no-repeat pl-[2.31rem] pr-[1.12rem]",
      lg: "bg-search-big bg-left-0.88 bg-no-repeat pl-[2.54rem] pr-[1.12rem]",
    };

    return (
      <div className={className}>
        <>
          {type === "select" ? (
            <select
              className={cn(
                ALIGN_MAPPING[align],
                COLOR_MAPPING[color],
                SIZE_MAPPING[size],
                "w-full py-[0.69rem] placeholder:font-normal rounded-md outline-0 text-zinc-800 pl-[1.12rem] pr-[2.522rem] bg-select bg-no-repeat bg-right-0.87"
              )}
              name={name}
              id={name}
              disabled={disabled}
            >
              {options.map((value, key) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </select>
          ) : type === "textarea" ? (
            <textarea
              name={name}
              id={id}
              rows={4}
              disabled={disabled}
              placeholder={placeholder}
              className={cn(
                ALIGN_MAPPING[align],
                COLOR_MAPPING[color],
                SIZE_MAPPING[size],
                "w-full py-[0.75rem] placeholder:font-normal rounded-md outline-0 text-zinc-800 pl-[1.12rem] pr-[2.522rem] resize-none"
              )}
            ></textarea>
          ) : (
            <input
              disabled={disabled}
              ref={ref}
              id={id}
              name={name}
              className={cn(
                ALIGN_MAPPING[align],
                COLOR_MAPPING[color],
                SIZE_MAPPING[size],
                "w-full py-[0.69rem] placeholder:font-normal rounded-md outline-0 text-zinc-800",
                isError ? "border-red-400" : "",
                type === "search" ? SEARCH_SIZE_MAPPING[size] : "px-[1.12rem]"
              )}
              placeholder={placeholder}
              type={type}
              {...props}
            />
          )}
        </>
      </div>
    );
  }
);

export default Input;

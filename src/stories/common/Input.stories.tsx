import type { Story, StoryDefault } from "@ladle/react";
import { Input } from "@src/components";
import type { HTMLInputTypeAttribute } from "react";

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
  disabled: boolean;
  color: IInputColor;
  size: IInputSize;
  align: IInputAlign;
}

export default {
  title: "Components",
  args: {
    placeholder: "Nguyen Van A",
    isError: false,
    disabled: false,
    name: "resume",
    id: "resume",
  },
  argTypes: {
    type: {
      defaultValue: "text",
      options: [
        "button",
        "checkbox",
        "color",
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "radio",
        "range",
        "reset",
        "search",
        "submit",
        "tel",
        "text",
        "time",
        "url",
        "week",
        "select",
        "textarea",
      ],
      label: "Input type",
      control: {
        type: "select",
      },
    },
    color: {
      defaultValue: "neutral-50",
      options: ["slate-100", "neutral-50", "white"],
      label: "Input Color",
      control: {
        type: "select",
      },
    },
    size: {
      defaultValue: "sm",
      options: ["sm", "lg"],
      label: "Input Size",
      control: {
        type: "select",
      },
    },
    align: {
      defaultValue: "left",
      options: ["center", "left"],
      label: "Input Align",
      control: {
        type: "select",
      },
    },
  },
} satisfies StoryDefault<Props>;

export const InputStory: Story<Props> = ({
  type,
  placeholder,
  isError,
  name,
  id,
  color,
  size,
  disabled,
  align,
}) => {
  return (
    <>
      <Input
        align={align}
        options={["A", "B", "C", "D"]}
        disabled={disabled}
        color={color}
        size={size}
        type={type}
        placeholder={placeholder}
        isError={isError}
        name={name}
        id={id}
      />
    </>
  );
};

InputStory.storyName = "Input";

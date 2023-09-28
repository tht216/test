import type { Story, StoryDefault } from "@ladle/react";
import { Button } from "@src/components";
import React from "react";

type IButtonColor = "blue" | "white" | "gray";
type IButtonSize = "xs" | "sm" | "lg";

interface IButtonProps {
  label?: React.ReactNode;
  color?: IButtonColor;
  size?: IButtonSize;
  className?: string;
  disable?: boolean;
}

export default {
  title: "Components",
  args: {
    label: "Dùng thử",
    disable: false,
  },
  argTypes: {
    size: {
      defaultValue: "lg",
      options: ["xs", "sm", "lg"],
      label: "Button size",
      control: {
        type: "inline-radio",
      },
    },
    color: {
      defaultValue: "blue",
      options: ["blue", "white", "gray"],
      label: "Button color",
      control: {
        type: "inline-radio",
      },
    },
  },
} satisfies StoryDefault<IButtonProps>;

export const ButtonStory: Story<IButtonProps> = ({
  size,
  color,
  label,
  disable,
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Button disable={disable} size={size} color={color}>
        {label}
      </Button>
    </div>
  );
};

ButtonStory.storyName = "Button";

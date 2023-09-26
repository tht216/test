import type { Story, StoryDefault } from "@ladle/react";
import { Button } from "@src/components";
import React from "react";

type IButtonColor = "blue" | "white";
type IButtonSize = "sm" | "lg";

interface IButtonProps {
  label?: React.ReactNode;
  color?: IButtonColor;
  size?: IButtonSize;
  className?: string;
  href: string;
}

export default {
  title: "Components",
  args: {
    label: "Dùng thử",
    href: "",
  },
  argTypes: {
    size: {
      defaultValue: "lg",
      options: ["sm", "lg"],
      label: "Button size",
      control: {
        type: "inline-radio",
      },
    },
    color: {
      defaultValue: "blue",
      options: ["blue", "white"],
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
  href,
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Button href={href} size={size} color={color}>
        {label}
      </Button>
    </div>
  );
};

ButtonStory.storyName = "Button";

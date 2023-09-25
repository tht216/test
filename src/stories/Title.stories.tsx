import type { Story, StoryDefault } from "@ladle/react";
import { Title } from "@src/components";

type ITitleColor = "zinc-800" | "zinc-700" | "blue" | "white";
type ITitleSize = "5xl" | "4xl" | "lg";
type ITitleAlign = "center" | "left";

interface ITitleProps {
  label?: React.ReactNode;
  color?: ITitleColor;
  size?: ITitleSize;
  align?: ITitleAlign;
  className?: string;
}

export default {
  title: "Components",
  args: {
    label: "Wifosell là giải pháp tối ưu cho từng ngành hàng",
  },
  argTypes: {
    size: {
      defaultValue: "4xl",
      options: ["5xl", "4xl", "lg"],
      label: "Title size",
      control: {
        type: "inline-radio",
      },
    },
    color: {
      defaultValue: "zinc-800",
      options: ["zinc-800", "zinc-700", "blue", "white"],
      label: "Title color",
      control: {
        type: "inline-radio",
      },
    },
    align: {
      defaultValue: "center",
      options: ["left", "center"],
      label: "Title align",
      control: {
        type: "inline-radio",
      },
    },
  },
} satisfies StoryDefault<ITitleProps>;

export const TitleStory: Story<ITitleProps> = ({
  size,
  color,
  align,
  label,
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Title size={size} color={color} align={align}>
        {label}
      </Title>
    </div>
  );
};

TitleStory.storyName = "Title";

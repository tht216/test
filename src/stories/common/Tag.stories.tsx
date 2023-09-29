import type { Story, StoryDefault } from "@ladle/react";
import { Tag } from "@src/components";

type ITagColor = "green" | "red";

interface ITagProps {
  label?: string;
  color?: ITagColor;
  filled?: boolean;
  className?: string;
}

export default {
  title: "Components",
  args: {
    label: "Còn hàng                 500.000 VND",
    filled: false,
  },
  argTypes: {
    color: {
      defaultValue: "green",
      options: ["green", "red"],
      label: "Tag color",
      control: {
        type: "inline-radio",
      },
    },
  },
} satisfies StoryDefault<ITagProps>;

export const TagStory: Story<ITagProps> = ({ color, filled, label }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Tag filled={filled} color={color}>
        {label}
      </Tag>
    </div>
  );
};

TagStory.storyName = "Tag";

import type { Story, StoryDefault } from "@ladle/react";
import { ProsItem } from "@src/components";
import { PROS_ITEMS } from "@src/constants/home";
import type { IProsItem } from "@src/types/home";
import React from "react";

interface Props {
  className?: string;
  prosItem: IProsItem;
}

export default {
  title: "Components",
} satisfies StoryDefault<Props>;

export const ProsItemStory: Story<Props> = ({}) => {
  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 gap-[1.94rem] w-full h-full">
      {PROS_ITEMS.map((value, index) => (
        <ProsItem className="mx-auto" key={index} prosItem={value} />
      ))}
    </div>
  );
};

ProsItemStory.storyName = "ProsItem";

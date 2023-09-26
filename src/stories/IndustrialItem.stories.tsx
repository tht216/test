import type { Story, StoryDefault } from "@ladle/react";
import { IndustrialItem } from "@src/components";
import { INDUSTRIAL_ITEMS } from "@src/constants/home";
import type { IIndustrialItem } from "@src/types/home";
import React from "react";

type Props = {
  className?: string;
  industrialItem: IIndustrialItem;
};

export default {
  title: "Components",
} satisfies StoryDefault<Props>;

export const industrialItemStory: Story<Props> = ({}) => {
  return (
    <div className="grid xl:grid-cols-5 grid-cols-2 gap-[1.94rem] w-full h-full">
      {INDUSTRIAL_ITEMS.map((value, index) => (
        <IndustrialItem className="mx-auto" key={index} industrialItem={value} />
      ))}
    </div>
  );
};

industrialItemStory.storyName = "industrialItem";

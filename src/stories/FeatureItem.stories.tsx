import type { Story, StoryDefault } from "@ladle/react";
import { FeatureItem } from "@src/components";
import { FEATURE_ITEMS } from "@src/constants/home";
import type { IFeatureItem } from "@src/types/home";
import React from "react";

type Props = {
  className?: string;
  featureItem: IFeatureItem;
};

export default {
  title: "Components",
} satisfies StoryDefault<Props>;

export const FeatureItemStory: Story<Props> = ({}) => {
  return (
    <div className="container py-4">
      <div className="grid grid-cols-2 gap-[1.88rem] xl:w-[50%] w-full">
        {FEATURE_ITEMS.map((value, index) => (
          <FeatureItem key={index} featureItem={value} />
        ))}
      </div>
    </div>
  );
};

FeatureItemStory.storyName = "FeatureItem";

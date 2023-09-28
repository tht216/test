import type { Story, StoryDefault } from "@ladle/react";
import { Slider } from "@src/components";
import React from "react";

interface Props {
  className?: string;
};

export default {
  title: "Components",
} satisfies StoryDefault<Props>;

export const SliderStory: Story<Props> = ({}) => {
  return (
    <div className="bg-gradient-blue">
      <div className="container">
        <Slider className="py-[4rem]" />
      </div>
    </div>
  );
};

SliderStory.storyName = "Slider";

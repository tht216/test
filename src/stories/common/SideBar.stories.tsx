import type { Story, StoryDefault } from "@ladle/react";
import { SideBar } from "@src/components";
import React from "react";

interface Props {
  isOpen: boolean;
}

export default {
  title: "Section",
  args: {
    isOpen: true,
  },
} satisfies StoryDefault<Props>;

export const SideBarStory: Story<Props> = ({ isOpen }) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <SideBar isOpen={isOpen} />
    </div>
  );
};

SideBarStory.storyName = "Side Bar";

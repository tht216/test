import type { Story, StoryDefault } from "@ladle/react";
import { NavBar } from "@src/components";
import OpenMenuProvider from "@src/contexts/OpenMenuContext";
import React from "react";

export default {
  title: "Section",
} satisfies StoryDefault;

export const NavBarStory: Story = ({}) => {
  return (
    <OpenMenuProvider>
      <div className="flex flex-col items-center w-full h-full">
        <NavBar />
      </div>
    </OpenMenuProvider>
  );
};

NavBarStory.storyName = "Navigation Bar";

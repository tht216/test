import type { Story, StoryDefault } from "@ladle/react";
import { Footer } from "@src/components";
import React from "react";

export default {
  title: "Section",
} satisfies StoryDefault;

export const FooterStory: Story = ({}) => {
  return <Footer />;
};

FooterStory.storyName = "Footer";

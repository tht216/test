import type { Story, StoryDefault } from "@ladle/react";
import Layout from "@src/layouts/CRM";
import React from "react";

export default {
  title: "Section",
} satisfies StoryDefault;

export const LayoutStory: Story = ({}) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Layout>
        <div>ABC</div>
      </Layout>
    </div>
  );
};

LayoutStory.storyName = "Layout";

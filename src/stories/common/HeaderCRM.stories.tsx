import type { Story, StoryDefault } from "@ladle/react";
import { HeaderCRM } from "@src/components";
import React from "react";



export default {
  title: "Section",
} satisfies StoryDefault;

export const HeaderCRMStory: Story = ({}) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <HeaderCRM onClick={() => {}} />
    </div>
  );
};

HeaderCRMStory.storyName = "Header CRM";

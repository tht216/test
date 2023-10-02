import type { Story, StoryDefault } from "@ladle/react";
import { CustomerChart } from "@src/components";

export default {
  title: "Chart",
} satisfies StoryDefault;

export const ChartStory: Story = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <CustomerChart />
    </div>
  );
};

ChartStory.storyName = "Customer Satisfaction Chart";

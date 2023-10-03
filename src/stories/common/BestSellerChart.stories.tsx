import type { Story, StoryDefault } from "@ladle/react";
import { BestSellerChart } from "@src/components";

export default {
  title: "Chart",
} satisfies StoryDefault;

export const ChartStory: Story = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full h-full">
      <BestSellerChart />
    </div>
  );
};

ChartStory.storyName = "Best Seller Chart";

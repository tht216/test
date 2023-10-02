import type { Story, StoryDefault } from "@ladle/react";
import { ProfitChart } from "@src/components";

type IChartType = "line" | "bar";
interface Props {
  type: IChartType;
}
export default {
  title: "Chart",
  argTypes: {
    type: {
      defaultValue: "bar",
      options: ["bar", "line"],
      label: "Chart Type",
      control: {
        type: "inline-radio",
      },
    },
  },
} satisfies StoryDefault<Props>;

export const ChartStory: Story<Props> = ({ type }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <ProfitChart type={type} />
    </div>
  );
};

ChartStory.storyName = "Profit Chart";

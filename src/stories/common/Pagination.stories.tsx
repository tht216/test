import type { Story, StoryDefault } from "@ladle/react";
import { Pagination } from "@src/components";
import React, { useState } from "react";

interface Props {
  className?: string;
  totalPage: number;
  maxPagePerView: number;
}

export default {
  title: "Components",
  args: {
    totalPage: 10,
    maxPagePerView: 5,
  },
} satisfies StoryDefault<Props>;

export const PaginationStory: Story<Props> = ({
  totalPage,
  maxPagePerView,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <Pagination
        maxPagePerView={maxPagePerView}
        totalPage={totalPage}
        currentPage={currentPage}
        onChange={setCurrentPage}
      />
    </div>
  );
};

PaginationStory.storyName = "Pagination";

import cn from "classnames";
import type { FC } from "react";
import React from "react";
import arrow from "@src/assets/icons/common/eva_arrow-ios-back-fill.svg";
import arrowDisabled from "@src/assets/icons/common/arrow-disabled.svg";
import Image from "next/image";

interface Props {
  className?: string;
  totalPage: number;
  currentPage: number;
  maxPagePerView: number;
  onChange: (page: number) => void;
}

const Pagination: FC<Props> = ({
  totalPage = 5,
  currentPage = 1,
  maxPagePerView = 3,
  className = "",
  onChange,
}) => {
  const HOVER_MAPPING = {
    right:
      "group-hover:border-r-2 group-hover:border-b-2 group-hover:p-0.5 group-hover:border-slate-500 group-hover:inline-block group-hover:-rotate-45 group-hover:bg-transparent group-hover:rounded-none",
    left: "group-hover:border-r-2 group-hover:border-b-2 group-hover:p-0.5 group-hover:border-slate-500 group-hover:inline-block group-hover:rotate-[135deg] group-hover:bg-transparent group-hover:rounded-none",
  };

  const generatePages = (current: number, maxPage: number, total: number) => {
    const result = [];
    if (current < maxPage)
      return Array.from({ length: maxPage }, (_, i) => i + 1);
    if (current + maxPage - 1 > total)
      return Array.from({ length: maxPage }, (_, i) => total - i).reverse();
    for (let i = -1; i < maxPage - 1; i++) {
      result.push(current + i);
    }

    return result;
  };

  return (
    <div className={cn(className, "flex items-center gap-[0.81rem]")}>
      <button
        className={cn(
          "w-6 h-6",
          currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
        )}
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image
          src={currentPage === 1 ? arrowDisabled : arrow}
          alt="arrow-left"
          className="w-full h-full"
        />
      </button>
      <div className="flex items-center gap-[0.38rem]">
        {currentPage + 1 > maxPagePerView && (
          <>
            <p
              className={cn(
                currentPage !== 1
                  ? "text-slate-500 bg-white rounded-[30px]"
                  : "text-white bg-gradient-blue rounded-md",
                "text-[13px] font-normal font-['Poppins'] w-[33.73px] h-[32.44px] flex items-center justify-center transition-all duration-500 cursor-pointer"
              )}
              onClick={() => onChange(1)}
            >
              {1}
            </p>
            <span
              className="cursor-pointer w-[33.73px] h-[32.44px] flex items-center justify-center gap-0.5 group hover:gap-px"
              onClick={() =>
                onChange(currentPage - 5 > 1 ? currentPage - 5 : 1)
              }
            >
              <span
                className={cn(
                  "rounded-full p-px bg-slate-500 transition-all duration-50",
                  HOVER_MAPPING["left"]
                )}
              ></span>
              <span
                className={cn(
                  "rounded-full p-px bg-slate-500 transition-all duration-50",
                  HOVER_MAPPING["left"]
                )}
              ></span>
              <span
                className={cn(
                  "rounded-full p-px bg-slate-500 transition-all duration-50 group-hover:hidden"
                )}
              ></span>
            </span>
          </>
        )}
        {generatePages(currentPage, maxPagePerView, totalPage).map(
          (value, index) => (
            <p
              key={index}
              className={cn(
                value !== currentPage
                  ? "text-slate-500 bg-white rounded-[30px] font-normal"
                  : "text-white font-medium bg-gradient-blue rounded-md",
                "text-[13px] font-['Poppins'] w-[33.73px] h-[32.44px] flex items-center justify-center transition-all duration-500 cursor-pointer"
              )}
              onClick={() => onChange(value)}
            >
              {value}
            </p>
          )
        )}
        {totalPage > maxPagePerView &&
          totalPage - currentPage + 1 >= maxPagePerView && (
            <>
              {totalPage - currentPage + 1 > maxPagePerView && (
                <span
                  className="cursor-pointer w-[33.73px] h-[32.44px] flex items-center justify-center gap-0.5 group hover:gap-px"
                  onClick={() =>
                    onChange(
                      currentPage + 5 > totalPage ? currentPage + 5 : totalPage
                    )
                  }
                >
                  <span
                    className={cn(
                      "rounded-full p-px bg-slate-500 transition-all duration-50",
                      HOVER_MAPPING["right"]
                    )}
                  ></span>
                  <span
                    className={cn(
                      "rounded-full p-px bg-slate-500 transition-all duration-50",
                      HOVER_MAPPING["right"]
                    )}
                  ></span>
                  <span
                    className={cn(
                      "rounded-full p-px bg-slate-500 transition-all duration-50 group-hover:hidden"
                    )}
                  ></span>
                </span>
              )}
              <p
                className={cn(
                  totalPage !== currentPage
                    ? "text-slate-500 bg-white rounded-[30px]"
                    : "text-white bg-gradient-blue rounded-md",
                  "text-[13px] font-normal font-['Poppins'] w-[33.73px] h-[32.44px] flex items-center justify-center transition-all duration-500 cursor-pointer"
                )}
                onClick={() => onChange(totalPage)}
              >
                {totalPage}
              </p>
            </>
          )}
      </div>

      <button
        className={cn(
          "w-6 h-6",
          currentPage === totalPage ? "cursor-not-allowed" : "cursor-pointer"
        )}
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        <Image
          src={currentPage === totalPage ? arrowDisabled : arrow}
          alt="arrow-left"
          className={"w-full h-full rotate-180"}
        />
      </button>
    </div>
  );
};

export default Pagination;

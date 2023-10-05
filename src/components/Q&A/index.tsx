import classNames from "classnames";
import React, { useState } from "react";
import arrow from "@src/assets/icons/home/chevron-left.svg";
import Image from "next/image";
import { type IQA } from "@src/types/home";

interface Props {
  className?: string;
  qAItem: IQA;
}

const QAItem: React.FC<Props> = ({ className = "", qAItem }) => {
  const [isExtended, setIsExtended] = useState<boolean>(false);
  const [flag, setFlag] = useState<boolean>(false);
  return (
    <div
      className={classNames(
        className,
        "bg-neutral-90 rounded-[5px] border border-stone-300 py-[1.5rem] pl-[1.75rem] pr-[1.5rem] transition-all duration-500"
      )}
    >
      <div className="flex justify-between items-center w-full">
        <p className="text-neutral-800 text-xl font-semibold font-['Public Sans']">
          {qAItem.question}
        </p>
        <Image
          src={arrow}
          alt="arrow"
          className={classNames(
            isExtended ? "" : "rotate-90",
            "transition-all duration-500 ease-in-out cursor-pointer"
          )}
          onClick={
            !isExtended
              ? () => {
                  setIsExtended((prev) => !prev);
                  setTimeout(() => setFlag((prev) => !prev), 10);
                }
              : () => {
                  setFlag((prev) => !prev);
                  setTimeout(() => setIsExtended((prev) => !prev), 300);
                }
          }
        />
      </div>
      {isExtended && (
        <p
          className={classNames(
            "text-neutral-800 text-sm font-normal font-['Public Sans'] leading-[1.375rem] pt-4 transition-all duration-500 line-clamp-3 ease-in-out",
            flag ? "h-[5.5rem]" : "h-0"
          )}
        >
          {qAItem.answer}
        </p>
      )}
    </div>
  );
};

export default QAItem;

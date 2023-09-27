import type { FC } from "react";
import cn from "classnames";
import Image from "next/image";
import type { ICustomerItem } from "@src/types/home";

interface Props {
  className?: string;
  customer: ICustomerItem;
}

const SliderItem: FC<Props> = ({
  className = "",
  customer = {
    customerBrand: "",
    customerDescription: "",
    customerLogo: "",
    customerRepresentative: "",
  },
}) => {
  return (
    <>
      <div
        className={cn(
          className,
          "flex flex-col rounded-[0.9375rem] items-center justify-center border border-divider-500 overflow-hidden py-8 bg-white"
        )}
      >
        <div className="flex flex-col gap-3 items-center">
          <Image
            src={customer.customerLogo}
            alt={customer.customerBrand}
            className="w-[34%] max-w-[160px] "
          />
          <div className="flex flex-col items-center gap-6">
            <p className="w-[90%] max-w-[29.75rem] text-center text-neutral-700 text-base font-normal font-['Mulish'] leading-snug tracking-tight line-clamp-3">
              {customer.customerDescription}
            </p>
            <p className="text-center text-zinc-500 text-base font-semibold font-['Mulish'] leading-snug tracking-tight">
              {customer.customerRepresentative}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderItem;

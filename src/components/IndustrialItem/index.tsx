import type { IIndustrialItem } from "@src/types/home";
import cn from "classnames";
import Image from "next/image";
type Props = {
  className?: string;
  industrialItem?: IIndustrialItem;
};

const IndustrialItem: React.FC<Props> = ({
  className,
  industrialItem = { industrialLogo: "", industrialDescription: "" },
}) => {
  return (
    <div
      className={cn(
        className,
        "flex flex-col items-center justify-center w-full h-full"
      )}
    >
      <Image
        src={industrialItem.industrialLogo}
        alt={industrialItem.industrialDescription}
        className="mb-[1.82rem] h-[112.3px] w-auto"
      />
      <h3 className="leading-[1.5rem] font-medium max-w-[10.625rem] text-lg leading-[2.5rem] text-stone-950 text-center">
        {industrialItem.industrialDescription.split(" &").map((value, index) =>
          index === 0 ? (
            value
          ) : (
            <>
              <br />& {value}
            </>
          )
        )}
      </h3>
    </div>
  );
};

export default IndustrialItem;

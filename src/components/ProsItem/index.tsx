import type { IStrength } from "@src/types/home";
import cn from "classnames";
import Image from "next/image";
import { Title } from "@src/components";

interface Props {
  className?: string;
  value?: IStrength & { strengthLogo: string };
}

const ProsItem: React.FC<Props> = ({
  className = "",
  value = { strengthTitle: "", strengthDescription: "", strengthLogo: "" },
}) => {
  return (
    <div
      className={cn(
        className,
        "bg-pros bg-contain bg-center bg-no-repeat flex items-center justify-center py-[1.25rem] max-h-[31.375rem] aspect-[353/506]"
      )}
    >
      <div className="flex flex-col items-center justify-center w-full h-full px-[2.63rem]">
        <Image
          src={value.strengthLogo}
          alt={value.strengthTitle}
          className="mb-[0.92rem] h-[80px] w-auto"
        />
        <Title size="lg" color="zinc-700" className="mb-[0.76rem]">
          {value.strengthTitle}
        </Title>
        <p className="text-zinc-700 text-lg font-normal leading-[2.15625rem] tracking-tight text-justify">
          {value.strengthDescription}
        </p>
      </div>
    </div>
  );
};

export default ProsItem;

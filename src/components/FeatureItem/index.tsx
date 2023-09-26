import type { IFeatureItem } from "@src/types/home";
import cn from "classnames";
import Image from "next/image";
type Props = {
  className?: string;
  featureItem?: IFeatureItem;
};

const FeatureItem: React.FC<Props> = ({
  className,
  featureItem = { featureLogo: "", featureDescription: "", featureHeader: "" },
}) => {
  return (
    <div
      className={cn(
        className,
        "flex flex-col items-start justify-center w-full"
      )}
    >
      <Image
        src={featureItem.featureLogo}
        alt={featureItem.featureHeader}
        className="mb-[0.5rem] h-[46px] w-auto"
      />
      <p className="text-zinc-800 text-lg font-normal leading-[1.5rem]">
        {
          <>
            <b>{featureItem.featureHeader}</b>
            <br />
            {featureItem.featureDescription}
          </>
        }
      </p>
    </div>
  );
};

export default FeatureItem;

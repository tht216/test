import cn from "classnames";
import down from "@src/assets/icons/common/chevron-down.svg";
import setting from "@src/assets/icons/common/Setting.svg";
import Image from "next/image";
import { Input } from "@src/components";

interface Props {
  className?: string;
  isOpen?: boolean;
  onClick: () => void;
}

const HeaderCRM: React.FC<Props> = ({ className, onClick, isOpen }) => {
  return (
    <header
      className={cn(className, "w-full flex transition-all duration-500")}
    >
      <div
        className={cn(
          "flex h-[4.375rem] grow items-center justify-between pl-[1.5rem] pr-[1.37rem] transition-all duration-500",
          isOpen ? "ml-[252px]" : ""
        )}
      >
        <div className="flex gap-[1.25rem] items-center grow">
          <span
            onClick={onClick}
            className="w-[0.875rem] h-[1.125rem] cursor-pointer"
          >
            <button className="w-full h-full px-[0.1rem] flex flex-col gap-1 justify-center">
              <span
                className={cn(
                  "w-full h-[0.125rem] bg-gray-600 block rounded-full transition-all duration-700 ease-in-out",
                  isOpen ? "rotate-45 translate-y-[0.375rem] w-[1.125rem]" : ""
                )}
              ></span>
              <span
                className={cn(
                  "w-full h-[0.125rem] bg-gray-600 block rounded-full transition-all duration-700 ease-in-out",
                  isOpen ? "-rotate-45 w-[1.125rem]" : ""
                )}
              ></span>
              <span
                className={cn(
                  "w-full h-[0.125rem] bg-gray-600 block rounded-full transition-all duration-700 ease-in-out",
                  isOpen ? "hidden" : ""
                )}
              ></span>
            </button>
          </span>
          <Input
            placeholder="Search"
            type="search"
            color="slate-100"
            size="sm"
            name="search"
            id="search"
            disabled={false}
            className="w-[90%] max-w-[35.1875rem]"
          />
        </div>
        <div className="flex gap-[0.59rem]">
          <Image
            src="https://s3-alpha-sig.figma.com/img/9e99/8bb8/201741ed7c42c25d8be672bdd1697d55?Expires=1696809600&Signature=BqaT7L2r-MIYk~n1fS05HIwPqZeeIb3ocFHKy6Uc~WD65ximyu7KJvT7cn4vpg87uRsDdNZZsB4LU32pDji~Xm6cbjLgkotTdmrIF5SgS8ErOV4kzsdJ57Rt2wayQzfln~9Z0uUFPhVe1bDgISspbe-83ukipYvFxkggAHP7c8F5eK3X6l4sD0M6~3y1eNQlgi48Idy1aRn82IcbsLfGM3KqW1CwL3XJdbJS9SwgP20GspszE~nPJc~S7aexjWDZsflecH5XYPDQqcczgujgAE-x9IvIMyREayWnlOePdhWUzunDOU6INn9MBUH4946ShPU0JvklZedAOLPHouKIjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div
            className="flex items-center cursor-pointer gap-[0.35rem]"
            onClick={() => {}}
          >
            <p className="text-gray-600 text-[0.8125rem] font-normal">Henry</p>
            <Image
              src={down}
              alt="arrow down"
              className="w-[0.8125rem] aspect-square"
            />
          </div>
          <Image
            src={setting}
            alt="setting"
            className="w-[1.375rem] aspect-square"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderCRM;

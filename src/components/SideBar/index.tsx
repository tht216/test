import cn from "classnames";
import logo from "@src/assets/logos/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CMR_ROUTES } from "@src/constants/common";
// import { useState } from "react";

interface Props {
  className?: string;
  isOpen?: boolean;
}

const SideBar: React.FC<Props> = ({ className, isOpen = true }) => {
  const pathname = usePathname();
  // const [isOpened, setIsOpened] = useState<boolean>(false);
  // const [isVisible, setIsVisible] = useState<boolean>(false);

  // const toggleMenu = () => {
  //   if (isOpened) {
  //     setIsOpened((menuStatus) => !menuStatus);
  //     setTimeout(() => setIsVisible((menuStatus) => !menuStatus), 500);
  //   } else {
  //     setIsVisible((menuStatus) => !menuStatus);
  //     setTimeout(() => setIsOpened((menuStatus) => !menuStatus), 100);
  //   }
  // };

  return (
    <section
      className={cn(
        className,
        isOpen ? "w-[252px]" : "w-0 -translate-x-[252px]",
        "fixed z-[1] top-0 left-0 overflow-x-hidden transition-all duration-500 h-full"
      )}
    >
      <nav className="relative h-full w-full flex flex-col bg-slate-800 pt-[1.31rem] max-w-[252px] gap-[2.25rem]">
        <Link href="/" className="max-w-[7.625rem] object-contain mb-4 mx-auto">
          <Image src={logo} className="w-full" alt="logo Wifosell" />
        </Link>
        <ul className="flex flex-col gap-[1.15rem] px-6">
          {CMR_ROUTES.map((value) => (
            <li key={value.idRoute} className="flex items-center gap-4 group">
              <Image
                src={value.logoRoute}
                alt={value.routeName}
                className={cn(
                  pathname === value.hrefRoute
                    ? ""
                    : "invert-[80%] sepia-[0%] saturate-[5062%] hue-rotate-[211deg] brightness-[81%] contrast-[90%]",
                  "w-[1rem] aspect-square transition-all duration-500 group-hover:invert-0 group-hover:sepia-0 group-hover:saturate-0 group-hover:hue-rotate-0 group-hover:brightness-100 group-hover:contrast-100"
                )}
              />
              <Link
                href={value.hrefRoute}
                className={cn(
                  pathname === value.hrefRoute
                    ? "text-white"
                    : "text-neutral-450",
                  "text-[0.8125rem] font-normal group-hover:text-white transition-all duration-500"
                )}
              >
                {value.routeName}
              </Link>
            </li>
          ))}
        </ul>
        {/* <span
          onClick={toggleMenu}
          className="flex items-center xl:hidden gap-2 cursor-pointer"
        >
          <p className="font-medium text-base leading-[1.82rem] text-zinc-800">
            MENU
          </p>
          <div className="w-[1.125rem] h-[1.125rem]">
            <button className="w-full h-full px-[0.1rem] flex flex-col gap-1 justify-center">
              <span
                className={cn(
                  "w-[0.4625rem] h-[0.125rem] bg-zinc-800 block rounded-full transition-all duration-700 ease-in-out",
                  isOpened ? "translate-x-full" : ""
                )}
              ></span>
              <span className="w-[0.93rem] h-[0.125rem] bg-zinc-800 block rounded-full"></span>
              <span
                className={cn(
                  "w-[0.69rem] h-[0.125rem] bg-zinc-800 block rounded-full transition-all duration-700 ease-in-out",
                  isOpened ? "translate-x-1/3" : ""
                )}
              ></span>
            </button>
          </div>
        </span> */}
      </nav>
    </section>
  );
};

export default SideBar;

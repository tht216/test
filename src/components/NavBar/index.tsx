import cn from "classnames";
import logo from "@src/assets/logos/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ROUTES } from "@src/constants/common";
import { Button } from "@src/components";
import { useState } from "react";
import { useRouter } from "next/router";

interface Props {
  className?: string;
}

const NavBar: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    if (isOpened) {
      setIsOpened((menuStatus) => !menuStatus);
      setTimeout(() => setIsVisible((menuStatus) => !menuStatus), 500);
    } else {
      setIsVisible((menuStatus) => !menuStatus);
      setTimeout(() => setIsOpened((menuStatus) => !menuStatus), 100);
    }
  };
  const router = useRouter();
  const handleClick = ()=>{
    router.push("/");
  };


  return (
    <header className={cn(className, "w-full")}>
      <div className="container">
        <nav className="relative xl:min-h-[6.1875rem] min-h-[4.3125rem] w-full flex justify-between items-center">
          <div className="flex items-center gap-x-8">
            <Link href="/" className="max-w-[7.625rem] object-contain">
              <Image src={logo} className="w-full" alt="logo Wifosell" />
            </Link>
            <ul className="hidden xl:flex gap-x-7">
              {ROUTES.map((value) => (
                <li key={value.id}>
                  <Link
                    href={value.href}
                    className={cn(
                      pathname === value.href
                        ? "text-blue-500"
                        : "text-zinc-800",
                      "text-lg font-bold leading-[1.125rem] tracking-tight hover:text-blue-500 transition-all duration-500"
                    )}
                  >
                    {value.routeName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="hidden xl:flex gap-x-7 items-center">
            <li>
              <Link
                href={"/login"}
                className={cn(
                  pathname === "/login" ? "text-blue-500" : "text-zinc-800",
                  "text-lg font-bold leading-[1.125rem] tracking-tight hover:text-blue-500 transition-all duration-500"
                )}
              >
                Đăng nhập
              </Link>
            </li>
            <li>
              <Button href="/trial" size="sm" color="white" onClick={handleClick}>
                Dùng thử
              </Button>
            </li>
          </ul>
          <span
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
          </span>
          {isVisible && (
            <div
              className={cn(
                "fixed bg-white transition-all duration-500 h-[calc(100dvh-4.3125rem)] w-full left-0 right-0 top-[4.3125rem] xl:hidden",
                isOpened ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="flex flex-col justify-between items-center w-full h-full overflow-auto pt-10 pb-16 md:pt-12">
                <div
                  className={cn(
                    "flex flex-col justify-between items-center z-10 h-full overflow-auto w-full duration-500 delay-500 transition-all"
                  )}
                >
                  <div
                    body-scroll-lock-ignore="true"
                    className="flex flex-col items-center justify-center w-full"
                  >
                    <ul
                      className="flex flex-col items-center font-normal gap-8 mb-8 md:gap-[3.125rem] md:mb-[3.75rem] uppercase"
                      body-scroll-lock-ignore="true"
                    >
                      {ROUTES.map((value) => (
                        <li key={value.id} className="">
                          <Link
                            href={value.href}
                            className={cn(
                              pathname === value.href
                                ? "text-blue-500"
                                : "text-zinc-800",
                              "text-lg font-bold leading-[1.125rem] tracking-tight hover:text-blue-500 transition-all duration-500"
                            )}
                          >
                            {value.routeName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  body-scroll-lock-ignore="true"
                  className="flex flex-col items-center gap-8 md:gap-[2.75rem] mt-10 w-full"
                >
                  <div className="flex items-center justify-center gap-4">
                    <Link
                      href={"/login"}
                      className={cn(
                        pathname === "/login"
                          ? "text-blue-500"
                          : "text-zinc-800",
                        "text-lg font-bold leading-[1.125rem] tracking-tight hover:text-blue-500 transition-all duration-500"
                      )}
                    >
                      Đăng nhập
                    </Link>
                    <Button href="/trial" size="sm" color="white">
                      Dùng thử
                    </Button>
                  </div>

                  <Link href="/" className="max-w-[7.625rem] object-contain">
                    <Image src={logo} className="w-full" alt="logo Wifosell" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

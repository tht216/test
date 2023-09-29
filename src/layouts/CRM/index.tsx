import type { FC, ReactNode } from "react";
import cn from "classnames";
import { HeaderCRM, SideBar } from "@src/components";
import { useState } from "react";

interface Props {
  children?: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <SideBar isOpen={isOpen} />
      <HeaderCRM isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
      <main
        className={cn(
          isOpen ? "ml-[252px]" : "",
          "transition-all duration-500"
        )}
      >
        {children}
      </main>
    </>
  );
};
export default Layout;

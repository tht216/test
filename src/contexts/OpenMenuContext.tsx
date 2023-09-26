"use client";

import type { FC, ReactNode } from "react";
import { createContext, useState } from "react";

interface IOpenMenu {
  toggle: () => void;
  isOpen: boolean;
}

interface IOpenProvider {
  children: ReactNode;
}
export const OpenMenuContext = createContext<IOpenMenu | null>(null);

const OpenMenuProvider: FC<IOpenProvider> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  return (
    <OpenMenuContext.Provider value={{ toggle, isOpen }}>
      {children}
    </OpenMenuContext.Provider>
  );
};

export default OpenMenuProvider;

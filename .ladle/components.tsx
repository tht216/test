import * as React from "react";
import { createContext, useState } from "react";
import type { FC, ReactNode } from "react";
import type { GlobalProvider } from "@ladle/react";
import "@src/app/globals.css";

interface IUiContext {
  bodyCanBeScrolled: boolean;
  setBodyCanBeScrolled: (canBeScrolled: boolean) => void;
}

interface Props {
  children: ReactNode;
}

export const UIContext = createContext<IUiContext>(undefined!);

const UIContextProvider: FC<Props> = ({ children }) => {
  const [bodyCanBeScrolled, setBodyCanBeScrolled] = useState(true);
  return (
    <UIContext.Provider
      value={{
        bodyCanBeScrolled,
        setBodyCanBeScrolled,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const Provider: GlobalProvider = ({ children }) => (
  <UIContextProvider>{children}</UIContextProvider>
);

import { ReactNode } from "react";

import { NativeBaseProvider } from "./NativeBaseProvider";

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return <NativeBaseProvider>{children}</NativeBaseProvider>;
}

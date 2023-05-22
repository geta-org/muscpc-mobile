import { ReactNode } from "react";

import { NativeBaseProvider as NativeProvider } from "native-base";

import { THEME } from "../theme";

type NativeBaseProviderProps = {
  children: ReactNode;
};

export function NativeBaseProvider({ children }: NativeBaseProviderProps) {
  return <NativeProvider theme={THEME}>{children}</NativeProvider>;
}

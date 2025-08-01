"use client";

import { ThemeProvider } from "@/components/dynamic";
import { ReactNode } from "react";
import { HeaderProvider } from "./HeaderProvider";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <HeaderProvider>{children}</HeaderProvider>
    </ThemeProvider>
  );
};

export default Providers;

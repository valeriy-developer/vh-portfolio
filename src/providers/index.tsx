"use client";

import { PageTransitionProvider, ThemeProvider } from "@/components/dynamic";
import { ReactNode } from "react";
import { HeaderProvider } from "./HeaderProvider";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <PageTransitionProvider>
        <HeaderProvider>{children}</HeaderProvider>
      </PageTransitionProvider>
    </ThemeProvider>
  );
};

export default Providers;

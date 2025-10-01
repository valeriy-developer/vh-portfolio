"use client";

import { PageTransitionProvider, ThemeProvider } from "@/components/dynamic";
import { ReactNode } from "react";
import { HeaderProvider } from "./HeaderProvider";
import { LoaderProvider } from "./LoaderProvider";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <LoaderProvider>
        <PageTransitionProvider>
          <HeaderProvider>{children}</HeaderProvider>
        </PageTransitionProvider>
      </LoaderProvider>
    </ThemeProvider>
  );
};

export default Providers;

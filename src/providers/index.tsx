"use client";

import { PageTransitionProvider, ThemeProvider } from "@/components/dynamic";
import { ReactNode } from "react";
import { HeaderProvider } from "./HeaderProvider";
import { LoaderProvider } from "./LoaderProvider";
import { ModalProvider } from "./ModalsProvider";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <LoaderProvider>
          <PageTransitionProvider>
            <HeaderProvider>{children}</HeaderProvider>
          </PageTransitionProvider>
        </LoaderProvider>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default Providers;

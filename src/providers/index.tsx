"use client";

import { ThemeProvider } from "@/components/dynamic";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;

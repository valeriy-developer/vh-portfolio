"use client";

import { ThemeProvider } from "@/components/dynamic";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

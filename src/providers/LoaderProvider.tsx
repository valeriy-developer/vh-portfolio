"use client";

import React, { createContext, useContext, useState } from "react";

interface LoaderContextValue {
  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
}

const LoaderContext = createContext<LoaderContextValue | undefined>(undefined);

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const ctx = useContext(LoaderContext);
  if (!ctx) {
    throw new Error("useLoader must be used inside LoaderProvider");
  }
  return ctx;
};

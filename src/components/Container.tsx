import React from "react";

import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[75rem] px-5 md:px-10 lg:px-34",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

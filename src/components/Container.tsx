import React from "react";

import { cn } from "@/lib/utils";

interface iProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className, ...props }: iProps) => {
  return (
    <div
      className={cn("mx-auto w-full px-5 md:px-10 lg:px-34", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

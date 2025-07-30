"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navigation from "./Navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const AppMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <DropdownMenu open={isOpened} onOpenChange={setIsOpened}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "group relative flex h-5 w-7.5 cursor-pointer items-center justify-start",
          )}
        >
          <span
            className={cn(
              "bg-primary-foreground easing absolute h-0.5 w-full group-hover:w-[75%]",
              isOpened ? "w-full rotate-45" : "-translate-y-2",
            )}
          />
          <span
            className={cn(
              "bg-primary-foreground easing absolute h-0.5 w-[50%] group-hover:w-full",
              isOpened ? "w-full opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "bg-primary-foreground easing absolute h-0.5 w-[75%] group-hover:w-[50%]",
              isOpened ? "w-full -rotate-45" : "translate-y-2",
            )}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="pl-1">
        <DropdownMenuGroup>
          <Navigation handleDropdown={setIsOpened} />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AppMenu;

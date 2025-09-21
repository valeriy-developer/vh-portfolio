"use client";

import React from "react";
import AppMenu from "../AppMenu";
import ThemeToggle from "../ThemeToggle";
import Container from "../Container";
import { cn } from "@/lib/utils";
import { useHeader } from "@/providers/HeaderProvider";
import Logo from "../icons/Logo";
import TransitionLink from "../TransitionLink";

const Header = () => {
  const { isVisible } = useHeader();

  return (
    <header
      className={cn(
        "bg-primary transition-[background, transform] fixed top-0 left-0 z-50 w-screen -translate-y-full py-3 opacity-0 duration-300 ease-in",
        isVisible && "translate-y-0 opacity-100",
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <AppMenu />
          <TransitionLink href="/">
            <Logo className="h-10 w-10 md:h-12 md:w-12" isAnimate />
          </TransitionLink>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};

export default Header;

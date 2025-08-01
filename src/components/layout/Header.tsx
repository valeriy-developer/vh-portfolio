"use client";

import React from "react";
import AppMenu from "../AppMenu";
import ThemeToggle from "../ThemeToggle";
import Container from "../Container";
import SecondLogo from "../icons/Logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useHeader } from "@/providers/HeaderProvider";

const Header = () => {
  const { isVisible } = useHeader();

  return (
    <header
      className={cn(
        "bg-primary easing fixed top-0 left-0 z-50 w-full -translate-y-full py-3 opacity-0",
        isVisible && "translate-y-0 opacity-100",
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <AppMenu />
          <Link href="/">
            <SecondLogo />
          </Link>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};

export default Header;

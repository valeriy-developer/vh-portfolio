import React from "react";
import AppMenu from "../AppMenu";
import ThemeToggle from "../ThemeToggle";
import Container from "../Container";
import SecondLogo from "../icons/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full py-3">
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

import React from "react";
import AppMenu from "../AppMenu";
import ThemeToggle from "../ThemeToggle";
import Container from "../Container";
import SecondLogo from "../icons/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary sticky top-0 left-0 w-full py-3">
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

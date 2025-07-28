import React from "react";
import AppMenu from "../AppMenu";
import ThemeToggle from "../ThemeToggle";
import Container from "../Container";
import SecondLogo from "../icons/Logo";

const Header = () => {
  return (
    <header className="w-full">
      <Container>
        <div className="flex items-center justify-between">
          <AppMenu />
          <SecondLogo />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};

export default Header;

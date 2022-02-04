import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Navbar;

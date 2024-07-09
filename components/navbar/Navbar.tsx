import React from "react";
import DesktopNav from "./desktop/DesktopNav";
import MobileNav from "./mobile/MobileNav";

const Navbar = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default Navbar;

import React, { useState, useContext } from "react";
// import nav context
import { NavContext } from "../context/NavContext";

const NavMenu = () => {
  const { navIsOpen, handleOpenNav } = useContext(NavContext);
  console.log(navIsOpen);
  return (
    <div
      className={`${
        navIsOpen ? "right-0" : "-right-full"
      } w-full bg-white/80 fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-30 px-4 lg:px-[35px] `}
    >
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div onClick={() => handleOpenNav(!navIsOpen)}>X</div>
      </div>
    </div>
  );
};

export default NavMenu;

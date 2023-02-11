import React, { createContext, useState } from "react";

// create nav context
export const NavContext = createContext();
const NavProvider = ({ children }) => {
  // nav state
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleOpenNav = (navStat) => {
    setNavIsOpen(navStat);
  };
  return (
    <NavContext.Provider value={{ navIsOpen, handleOpenNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;

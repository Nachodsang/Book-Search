import React, { useEffect, useState, useContext } from "react";
// import Link
import { Link } from "react-router-dom";

// import icons
import { FiMenu } from "react-icons/fi";
import { GiBookCover } from "react-icons/gi";

// import nav context
import { NavContext } from "../context/NavContext";

const Header = () => {
  const [transHeader, setTransHeader] = useState(false);
  //   nav menu state
  const { navIsOpen, handleOpenNav } = useContext(NavContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setTransHeader(true) : setTransHeader(false);
    });
  });
  return (
    <section
      className={`${
        !transHeader ? "bg-green-500/40 py-6" : "bg-green-300 py-3 "
      } w-full fixed transition-all duration-500 z-10`}
    >
      {/* container */}
      <div className="w-full md:max-w-[700px] lg:max-w-[1024px] px-[30px]  mx-auto flex items-center justify-between">
        {/* navmenu */}
        <div
          className="cursor-pointer"
          onClick={() => handleOpenNav(!navIsOpen)}
        >
          <FiMenu size="30" color="white" />
        </div>
        {/* Logo */}

        <Link to="/">
          <div className="flex justify-center items-center gap-1">
            <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold">
              BookStore
            </h1>
            <GiBookCover size="60" color="white" />
          </div>
        </Link>
        {/* Log In */}
        <div>
          <h1 className="text-white text-lg md:text-xl font-semibold">
            Log In
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Header;

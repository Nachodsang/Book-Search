import React from "react";

// import Links
import { Link } from "react-router-dom";
// import icons
import { GiBookCover } from "react-icons/gi";

const Footer = () => {
  return (
    <section className=" bg-green-300 min-h-[100px] lg:min-h-[150px] py-6 lg:py-12 ">
      <div className="w-full md:max-w-[700px] lg:max-w-[1024px] px-[30px]  mx-auto">
        <div className="flex justify-between flex-col md:flex-row items-center">
          <div>
            <Link to="/">
              <div className="flex justify-center  items-center gap-1">
                <h1 className="text-xl md:text-xl lg:text-2xl text-white font-bold">
                  BookStore
                </h1>
                <GiBookCover size="30" color="white" />
              </div>
            </Link>
          </div>
          <div className="font-semibold md:w-[65%] lg:w-[60%] flex md:justify-between justify-center items-center text-sm lg:text-md flex-col text-white md:flex-row">
            <h1>BookStore® 2023 All rights reserved</h1>
            <div className="cursor-pointer">Online Store Only</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

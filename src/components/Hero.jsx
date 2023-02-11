import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full bg-cover bg-books min-h-[700px] h-screen bg-no-repeat -z-0">
      {/* container */}
      <div className="w-full md:max-w-[700px] lg:max-w-[1024px] px-[30px] mx-auto relative top-32 lg:top-10  z-30">
        {/* TExt*/}
        <div className="flex flex-col lg:flex-row justify-center items-center  relative  lg:top-40 top-20 md:top-60 mx-auto">
          <div className="flex flex-col justify-center gap-y-4 flex-1 bg-green-500/25 p-6 rounded-xl">
            <h1 className="text-4xl font-bold text-white text-center lg:text-start">
              Your favourite bookstore is here.
            </h1>
            <p className="text-white font-bold text-xl lg:text-2xl  text-center lg:text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              incidunt inventore vel, deleniti optio delectus eius ducimus
              maxime cupiditate et sit nulla quisquam, officiis harum quas.
              Libero aliquid odit voluptas.
            </p>
          </div>
          {/* join member */}
          <div className="flex flex-col justify-center items-center lg:justify-start bg-green-500/25 lg:p-10 pb-10 rounded-xl gap-4 flex-1 lg:mb-[-300px]">
            <h1 className="text-2xl lg:text-4xl font-bold text-white text-center">
              Become a member to get more priviledge
            </h1>
            <button className="hover:bg-green-400 transition-all hover:border-green-200 border-4 rounded-full py-2 px-6 text-white text-bold bg-green-300 border-white text-3xl ">
              JOIN US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

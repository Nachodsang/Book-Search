import React from "react";

const Card = ({ item }) => {
  // deconstruct item
  const { volumeInfo } = item;

  return (
    <div className="hover:scale-[1.15] transition-all cursor-pointer duration-200 max-w-[250px] min-h-[350px] min-w-[150px] border-2 border-r-8 border-b-8 border-green-500 py-6 rounded-lg shadow-md">
      {/* container */}
      <div className="flex flex-col justify-center items-center m-auto gap-y-4">
        {/* image */}
        <div className="flex justify-center">
          <img
            className="w-[100px] h-[150px] object-cover rounded-lg shadow-xl border-r-4 border-green-200 border-b-4"
            src={volumeInfo?.imageLinks?.smallThumbnail}
          />
        </div>
        {/* text */}
        <div className="flex justify-center items-center flex-col max-h-[120px] overflow-auto">
          <h1 className="text-center text-lg font-bold uppercase">
            {volumeInfo?.title}
          </h1>
          <p className="text-center text-md italic ">{volumeInfo?.authors}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

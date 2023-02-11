import React, { useState, useEffect, useContext } from "react";
// import context
import { BookContext } from "../context/BookContext";

// import useParams
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { books } = useContext(BookContext);
  const [shownItem, setShownItem] = useState({});

  // deconstruct shownitem
  const { volumeInfo } = shownItem;

  // get id from url;
  const { id } = useParams();

  //   find book function

  const findBook = (queriId, books) => {
    const book = books.find((item) => {
      return item?.id === queriId;
    });
    setShownItem(book);
  };
  useEffect(() => {
    findBook(id, books);
  }, []);
  console.log(volumeInfo);
  return (
    <section className="w-full  bg-gradient-to-b from-purple-300 to-green-300 relative top-22 h-full min-h-screen py-[200px] ">
      <div className="w-full md:max-w-[700px] lg:max-w-[1024px] px-[30px]  mx-auto h-full">
        {/* photo and text container */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5 ">
          {/* photo */}
          <div className="flex-1  border-white mb-4 md:mb-0 py-4">
            <img
              className="md:w-[300px] w-[200px] rounded-xl shadow-md"
              src={volumeInfo?.imageLinks?.thumbnail}
            />
          </div>
          {/* text */}
          <div className="lg:border-l-4 lg:pl-6 lg:py-4 border-white  flex-1 flex flex-col gap-y-4 text-center md:text-start">
            <h1 className="font-bold text-2xl">{volumeInfo?.title}</h1>
            <h2 className="text-xl italic ">{volumeInfo?.subtitle}</h2>
            <p className="text-md ">{volumeInfo?.authors}</p>
            <p>{volumeInfo?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;

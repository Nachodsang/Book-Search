import React, { useContext } from "react";
// import Link
import { Link } from "react-router-dom";
// import book context
import { BookContext } from "../context/BookContext";
// import components
import Card from "./Card";

const BookList = () => {
  // set context
  const bookList = useContext(BookContext);
  // deconstruct context (booklist)
  const { books, search, setSearch, searchBook } = bookList;
  console.log(search);
  return (
    <div className="w-full md:max-w-[700px] lg:max-w-[1024px] px-[30px] flex flex-col justify-center items-center mx-auto  relative mt-10 mb-10">
      {/* title */}
      <div className="mb-6 flex flex-col justify-center items-center gap-3">
        <h1 className="text-4xl font-bold text-green-700">In Store</h1>
        <p className="font-semibold uppercase text-xl text-gray-600 text-center">
          Enjoy newly arrived books everyweek
        </p>
      </div>
      {/* Search books */}
      <div className="flex justify-center items-center md:flex-row flex-col gap-x-2 mb-6 lg:mb-8">
        <span className="text-2xl font-extrabold text-gray-600">Search:</span>
        <input
          type="text"
          placeholder="Reading is pleasing!"
          className="border border-green-300 px-5 py-3 text-center rounded-full hover:bg-green-200/50 focus:ring-4 focus:border-none transition-all outline-none placeholder:text-gray-800   focus:ring-green-400"
          onKeyDown={searchBook}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      {/* list */}
      <div className="gap-y-[50px] gap-x-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        {books &&
          books.map((item, index) => {
            return (
              <Link to={`/book/${item.id}`} key={index} className="text-black">
                <Card item={item} key={index} />
              </Link>
            );
          })}
      </div>
      {/* books not found */}
      {!books && (
        <div className="flex items-center justify-center mt-10">
          <h1 className="text-4xl font-bold text-red-300">Books not Found</h1>
        </div>
      )}
    </div>
  );
};

export default BookList;

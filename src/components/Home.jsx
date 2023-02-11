import React, { useContext } from "react";
import Hero from "./Hero";
import BookList from "./BookList";

import { BookContext } from "../context/BookContext";

const Home = () => {
  const { books } = useContext(BookContext);

  return (
    <div>
      <Hero />
      <BookList />
    </div>
  );
};

export default Home;

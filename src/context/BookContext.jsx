import React from "react";
// import create context
import { createContext, useState, useEffect } from "react";
// import axioos
import axios from "axios";

// create context
export const BookContext = createContext();

const BookProvider = ({ children }) => {
  // create book list state
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  //   maxResult
  const maxResult = 40;
  // url for default preview
  const defaultTopic = "flutter";
  const URL =
    `https://www.googleapis.com/books/v1/volumes?q=${defaultTopic}&key=AIzaSyBpZgTb_Rn8On_GUAL8OvenfpEe03lbb0U` +
    `&maxResults=${maxResult}`;
  //  url for search
  const searchURL =
    `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBpZgTb_Rn8On_GUAL8OvenfpEe03lbb0U` +
    `&maxResults=${maxResult}`;
  //  fetch function
  const fetchBooks = async (url) => {
    try {
      const response = await axios.get(url);
      setBooks(response.data.items);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchBooks(URL);
  }, []);

  //   search book and clear book state when press enter
  const searchBook = (e) => {
    {
      if (e.key === "Enter") {
        console.log("search start");
        fetchBooks(searchURL);

        setSearch("");
      }
    }
  };

  return (
    <BookContext.Provider value={{ books, search, setSearch, searchBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;

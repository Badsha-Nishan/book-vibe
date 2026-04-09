import React, { createContext } from "react";

export const BookContext = createContext();

const data = {
  text: "ABCD",
};

const BookProvider = ({ Children }) => {
  return <BookContext.Provider value={data}>{Children}</BookContext.Provider>;
};

export default BookProvider;

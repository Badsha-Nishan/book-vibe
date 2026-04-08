import React, { use } from "react";
import Books from "./Books";

const booksPromise = fetch("booksData.json").then((res) => res.json());
const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books);
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-2xl font-semibold mt-11 mb-6">Books</h2>
      <div className="grid grid-cols-3 gap-9">
        {books.map((book, ind) => (
          <Books key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;

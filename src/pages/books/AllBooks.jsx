import React, { use } from "react";
import BookCard from "../../components/shared/BookCard";

const booksPromise = fetch("booksData.json").then((res) => res.json());
const AllBooks = () => {
  const books = use(booksPromise);
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-2xl font-semibold mt-11 mb-6">Books</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
        {books.map((book, ind) => (
          <BookCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;

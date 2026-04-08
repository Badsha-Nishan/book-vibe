import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Books = ({ book }) => {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-200 shadow-sm p-5 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <figure>
        <div className="bg-gray-200 px-19 py-9 rounded-3xl">
          <img className="h-72 " src={image} alt={bookName} />
        </div>
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          {" "}
          {book.tags.map((tg, inx) => (
            <div
              key={inx}
              className="text-green-500 font-semibold bg-green-100 px-4 rounded-full py-1"
            >
              {tg}
            </div>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>By : {author}</p>
        <div className="card-actions justify-between border-t pt-4 border-t-gray-400 border-dashed">
          <div>{category}</div>
          <div className="flex items-center gap-2">
            {rating} <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;

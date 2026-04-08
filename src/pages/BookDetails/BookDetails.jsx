import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();

  const books = useLoaderData();

  const expectedBook = books.find((bk) => bk.bookId == id);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="p-6 bg-gray-200 rounded-2xl">
          <img
            src={expectedBook.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">{expectedBook.bookName}</h1>
          <p className="py-6">By : {expectedBook.author}</p>
          <p>{expectedBook.category}</p>
          <p>
            <strong>Review:</strong> {expectedBook.review}
          </p>
          <p>
            Tag:{" "}
            <span className="text-green-500 font-semibold mr-7 ml-4">
              #{expectedBook.tags[0]}
            </span>{" "}
            <span className="text-green-500 font-semibold">
              #{expectedBook.tags[1]}
            </span>
          </p>
          <div className="space-y-3">
            <div className="grid grid-cols-4">
              <p>Number of Pages: </p>
              <p className="font-bold col-span-3">{expectedBook.totalPages}</p>
            </div>
            <div className="grid grid-cols-4">
              <p>Publisher: </p>
              <p className="font-bold col-span-3">{expectedBook.publisher}</p>
            </div>
            <div className="grid grid-cols-4">
              <p>Year of Publishing: </p>
              <p className="font-bold col-span-3">
                {expectedBook.yearOfPublishing}
              </p>
            </div>
            <div className="grid grid-cols-4">
              <p>Rating: </p>
              <p className="font-bold col-span-3">{expectedBook.rating}</p>
            </div>
          </div>
          <div>
            <button className="btn btn-info btn-outline mr-3">Read</button>
            <button className="btn btn-accent">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

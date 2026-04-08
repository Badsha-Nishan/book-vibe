import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6">
      <div className="text-center max-w-md">
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold">Oops! Page not found</h2>

        {/* Description */}
        <p className="mt-2 text-gray-400">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
          >
            Go Back
          </button>

          <a
            href="/"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 transition"
          >
            Home
          </a>
        </div>

        {/* Decorative element */}
        <div className="mt-10 opacity-30 text-sm">
          Error code: 404_NOT_FOUND
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

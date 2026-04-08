import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layout/MainLayouts";
import Books from "../pages/books/Books";
import Homepage from "../pages/homepage/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
  },
]);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from "./components/Elements/Books.jsx";
import CardBook from "./components/Fragments/CardBook.jsx";
import ListBooks from "./components/Layouts/ListBooks.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import BookDetails from "./components/Layouts/BookDetails.jsx";
import LatestPage from "./pages/LatestPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1></h1>,
  },
  {
    path: "/cardbook",
    element: <CardBook />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/latest",
    Component: LatestPage,
  },
  {
    path: "books/:bookId",
    Component: BookDetails,
  },
  {
    path: "books/:bookId",
    element: <BookDetails />,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

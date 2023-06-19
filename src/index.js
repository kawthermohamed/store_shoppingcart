    import { StrictMode } from "react";

import React from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import About from "./Component/about";
import Store from "./Component/Store";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/store",
    element: <Store />
  },
  {
    path: "/",
    element: <App />
  }
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import GitSnap from "./components/projects/gitsnap.jsx";
import App from "./App.jsx";
import Prompto from "./components/projects/prompto.jsx";
import GigShop from "./components/projects/gigshop.jsx";
export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/gitsnap", element: <GitSnap /> },
  { path: "/prompto", element: <Prompto /> },
  { path: "/gigshop", element: <GigShop /> },
]);

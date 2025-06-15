import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./index.css";
import { Index } from "./pages/Index.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Index />}>
      <Route path="" element={<HomePage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

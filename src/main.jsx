import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./styles/index.css";
import { Index } from "./pages/Index.jsx";
import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const pathName = window.location.pathname;
if (pathName !== "/" && pathName.includes("/?/")) {
  const route = pathName.split("/?/")[1] || "";
  window.history.replaceState(null, null, "/" + route);
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Index />}>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/menukaart" element={<MenuPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

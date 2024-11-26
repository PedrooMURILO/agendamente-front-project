import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/redirectlogin/RedirectLogin.jsx";
import RedirectLogin from "./components/redirectlogin/RedirectLogin.jsx";
import RegisterProfessional from "./components/registerprofessional/RegisterProfessional.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/redirectlogin",
    element: <RedirectLogin />,
  },
  {
    path: "/registerprofessional",
    element: <RegisterProfessional />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

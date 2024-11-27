import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import RedirectLogin from "./components/redirectlogin/RedirectLogin.jsx";
import RegisterProfessional from "./components/registerprofessional/RegisterProfessional.jsx";
import RegisterPatient from "./components/registerpatient/RegisterPatient.jsx";
import LoginProfessional from "./components/loginprofessionall/LoginProfessional.jsx";

import PsychologistSchedule from "./components/psychologistschedule/PsychologistSchedule.jsx";

import PsychologistProfile from "./components/psychologistprofile/PsychologistProfile.jsx";

// Definindo as rotas
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
  },
  {
    path: "/registerpatient",
    element: <RegisterPatient />,
  },
  {
    path: "/loginprofessional",
    element: <LoginProfessional/>,
  },
  {
    path: "/psychologistschedule",
    element: <PsychologistSchedule/>,
  },
  {
    path: "/psychologistprofile",
    element: <PsychologistProfile/>,
  },



]);

// Renderizando o aplicativo
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

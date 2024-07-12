import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Services from "../pages/Services";
import About from "../pages/About";
import Login from "../pages/Login";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "service",
        element: <Services></Services>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "login",
        element: <Login></Login>
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: '/login',
        element:<Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/services/:id',
        element: <ServiceDetails />,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      }
    ],
  },
]);

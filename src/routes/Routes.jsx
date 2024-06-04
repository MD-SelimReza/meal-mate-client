import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import ErrorPage from "../pages/ErrorPage";
import MealDetails from "../pages/MealDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/meal/:id",
        element: <MealDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  { path: "/signIn", element: <SignIn /> },
  { path: "/signUp", element: <SignUp /> },
]);

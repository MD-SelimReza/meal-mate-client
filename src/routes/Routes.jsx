import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <p>Home</p>,
      },
    ],
  },
]);

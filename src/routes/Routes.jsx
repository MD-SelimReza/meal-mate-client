import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import ErrorPage from "../pages/ErrorPage";
import MealDetails from "../pages/MealDetails";
import Meals from "../pages/Meals";
import UpcomingMeals from "../pages/UpcomingMeals";
import PackageDetails from "../components/Home/PackageDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import Root from "../components/Dashboard/Root";
import Profile from "../pages/Dashboard/Profile";
import PrivateRoute from "./PrivateRoute";
import RequestedMeals from "../pages/Dashboard/Users/RequestedMeals";
import AddMealForm from "../pages/Dashboard/Admin/AddMealForm";
import AllMeals from "../pages/Dashboard/Admin/AllMeals";
import UsersReviews from "../pages/Dashboard/Admin/UsersReviews";
import ServeMeals from "../pages/Dashboard/Admin/ServeMeals";
import MyReviews from "../pages/Dashboard/Users/MyReviews";
import PaymentHistory from "../pages/Dashboard/Users/PaymentHistory";

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
        path: "/checkout/:package_name",
        element: (
          <PrivateRoute>
            <PackageDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/meals",
        element: <Meals />,
      },
      {
        path: "/upcoming-meals",
        element: <UpcomingMeals />,
      },
    ],
  },
  { path: "/signIn", element: <SignIn /> },
  { path: "/signUp", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // shared route
      {
        index: true,
        element: <Root />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      // admin route
      {
        path: "/dashboard/add-meal",
        element: <AddMealForm />,
      },
      {
        path: "/dashboard/all-meals",
        element: <AllMeals />,
      },
      {
        path: "/dashboard/users-reviews",
        element: <UsersReviews />,
      },
      {
        path: "/dashboard/serve-meals",
        element: <ServeMeals />,
      },
      {
        path: "/dashboard/upcoming-meals",
        element: <UpcomingMeals />,
      },
      // user route
      {
        path: "/dashboard/request-meals",
        element: <RequestedMeals />,
      },
      {
        path: "/dashboard/my-reviews",
        element: <MyReviews />,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
]);

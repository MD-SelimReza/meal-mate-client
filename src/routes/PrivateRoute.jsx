import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
import Loader from "../components/shared/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(loading, user);

  if (loading) return <Loader />;

  if (user) return children;

  return <Navigate to="/signIn" state={location.pathname} replace={true} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;

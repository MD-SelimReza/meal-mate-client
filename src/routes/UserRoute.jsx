import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const UserRoute = ({ children }) => {
  const { user, loading: authLoading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (authLoading || isAdminLoading) return <p>Data is loading....</p>;

  if (!user || isAdmin?.admin === true)
    return <Navigate to="/signIn" state={{ from: location }} replace={true} />;

  return children;
};

UserRoute.propTypes = {
  children: PropTypes.node,
};

export default UserRoute;

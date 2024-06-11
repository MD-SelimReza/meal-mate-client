import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
import Loader from "../components/shared/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading: authLoading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (authLoading || isAdminLoading) return <Loader />;

  if (!user || isAdmin?.admin === false)
    return <Navigate to="/signIn" state={{ from: location }} replace={true} />;

  return children;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;

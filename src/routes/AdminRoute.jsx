import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  console.log(isAdmin, isAdminLoading);

  if (loading && isAdminLoading) return <p>Data is loading....</p>;

  if (user && isAdmin) return children;

  return <Navigate to="/signIn" state={location.pathname} replace={true} />;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;

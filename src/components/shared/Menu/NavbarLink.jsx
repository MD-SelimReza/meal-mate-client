import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarLink = ({ address, label }) => {
  return (
    <NavLink
      to={address}
      className={({ isActive }) =>
        isActive
          ? "text-blue-400 border-b border-blue-400"
          : "hover:text-blue-400 opacity-75"
      }
    >
      {label}
    </NavLink>
  );
};

NavbarLink.propTypes = {
  address: PropTypes.string,
  label: PropTypes.string,
};

export default NavbarLink;

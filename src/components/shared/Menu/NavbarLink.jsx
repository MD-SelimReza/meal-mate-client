import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarLink = ({ address, label }) => {
  return (
    <NavLink
      to={address}
      className={({ isActive }) =>
        isActive
          ? "text-yellow-400 border-b border-yellow-400"
          : "hover:text-yellow-400 opacity-75"
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

import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import Container from "../Container";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Logo from "../Logo";
import NavbarLink from "../Menu/NavbarLink";
import CommonBtn from "../Button/CommonBtn";

const Navbar = () => {
  const { user, logOut, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

  const navLinks = (
    <>
      <NavbarLink address="/" label="Home" />
      <NavbarLink address="/about" label="About Us" />
      <NavbarLink address="/meals" label="Meals" />
      <NavbarLink address="/upcoming-meals" label="Upcoming Meals" />
    </>
  );

  return (
    <nav className="bg-blue-800 text-white">
      <Container>
        <div className="flex justify-between items-center p-4">
          <Logo />
          <div className="hidden md:flex space-x-4">{navLinks}</div>
          {!user && !loading ? (
            <div>
              <CommonBtn outline address="/signIn" label="Join Us" color />
            </div>
          ) : (
            <div className="relative">
              <div
                onClick={() => setIsDropDownOpen(!isDropdownOpen)}
                className="rounded-full cursor-pointer hover:shadow-md transition"
              >
                <div>
                  <img
                    className="rounded-full size-10"
                    referrerPolicy="no-referrer"
                    src={user && user.photoURL ? user.photoURL : "Image"}
                    alt="profile"
                    height="30"
                    width="30"
                  />
                </div>
              </div>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <Link
                    to="/"
                    className="block px-4 py-2 text-blue-800 hover:bg-gray-200"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-blue-800 hover:bg-gray-200"
                  >
                    Dashboard
                  </Link>
                  <div
                    onClick={logOut}
                    className="block px-4 py-2 text-blue-800 hover:bg-gray-200"
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-blue-700 w-full">
            <Link to="/" className="block px-4 py-2 hover:underline">
              Home
            </Link>
            <Link to="/about" className="block px-4 py-2 hover:underline">
              About
            </Link>
            <Link to="/services" className="block px-4 py-2 hover:underline">
              Services
            </Link>
            <Link to="/contact" className="block px-4 py-2 hover:underline">
              Contact
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;

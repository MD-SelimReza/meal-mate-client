import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Container from "../Container";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="text-gray-300 mt-2">Streamlining Hostel Management</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <Link to="/" className="hover:underline mb-2">
              Home
            </Link>
            <Link to="/about" className="hover:underline mb-2">
              About
            </Link>
            <Link to="/contact" className="hover:underline mb-2">
              Contact
            </Link>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-2">Email: support@hostelease.com</p>
            <p className="text-gray-300 mb-2">Phone: +123 456 7890</p>
            <div className="flex space-x-4 mt-4">
              <Link
                to="https://www.facebook.com"
                aria-label="Facebook"
                className="text-white bg-blue-600 p-2 rounded-full transition duration-300 hover:bg-blue-700"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                to="https://www.twitter.com"
                aria-label="Twitter"
                className="text-white bg-blue-400 p-2 rounded-full transition duration-300 hover:bg-blue-500"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                to="https://www.instagram.com"
                aria-label="Instagram"
                className="text-white bg-pink-600 p-2 rounded-full transition duration-300 hover:bg-pink-700"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                to="https://www.linkedin.com"
                aria-label="LinkedIn"
                className="text-white bg-blue-600 p-2 rounded-full transition duration-300 hover:bg-blue-700"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                to="https://www.youtube.com"
                aria-label="YouTube"
                className="text-white bg-red-600 p-2 rounded-full transition duration-300 hover:bg-red-700"
              >
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-gray-300">
        &copy; 2024 HostelEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

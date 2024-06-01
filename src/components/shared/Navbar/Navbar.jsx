import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    // <nav className="bg-blue-800 text-white p-4">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <a href="/" className="text-2xl font-bold">
    //       HostelEase
    //     </a>
    //     <div className="lg:hidden">
    //       <button
    //         onClick={toggleMenu}
    //         className="text-white focus:outline-none"
    //       >
    //         <svg
    //           className="w-6 h-6"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //     <div className={`lg:flex ${isOpen ? "block" : "hidden"} space-x-4`}>
    //       <a href="/" className="hover:underline block lg:inline-block">
    //         Home
    //       </a>
    //       <a href="/about" className="hover:underline block lg:inline-block">
    //         About
    //       </a>
    //       <a href="/contact" className="hover:underline block lg:inline-block">
    //         Contact
    //       </a>
    //       <a href="/login" className="hover:underline block lg:inline-block">
    //         Login
    //       </a>
    //       <div className="relative">
    //         <button
    //           onClick={toggleDropdown}
    //           className="bg-gray-200 text-blue-800 px-4 py-2 rounded hover:bg-gray-300 block lg:inline-block focus:outline-none"
    //         >
    //           Sign Up
    //         </button>
    //         {isDropdownOpen && (
    //           <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
    //             <a
    //               href="/profile"
    //               className="block px-4 py-2 text-blue-800 hover:bg-gray-200"
    //             >
    //               Profile
    //             </a>
    //             <a
    //               href="/dashboard"
    //               className="block px-4 py-2 text-blue-800 hover:bg-gray-200"
    //             >
    //               Dashboard
    //             </a>
    //             <a
    //               href="/logout"
    //               className="block px-4 py-2 text-blue-800 hover:bg-gray-200"
    //             >
    //               Logout
    //             </a>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav className="bg-blue-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">HostelEase</div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/services" className="hover:underline">
            Services
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
        <div className="flex space-x-4">
          <button
            className="
          border border-white text-white px-4 py-2 rounded-lg
          transition transform duration-300 hover:scale-105
         
        "
          >
            Login
          </button>
          <button
            className="
          bg-white text-blue-800 px-4 py-2 rounded-lg
          transition transform duration-300 hover:scale-105
        "
          >
            Signup
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <a href="/" className="block px-4 py-2 hover:underline">
            Home
          </a>
          <a href="/about" className="block px-4 py-2 hover:underline">
            About
          </a>
          <a href="/services" className="block px-4 py-2 hover:underline">
            Services
          </a>
          <a href="/contact" className="block px-4 py-2 hover:underline">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

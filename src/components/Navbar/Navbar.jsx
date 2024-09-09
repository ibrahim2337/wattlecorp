import { Link } from "react-router-dom";
import logo from "../../assets/logo/Screenshot_2024-08-17_164423-removebg-preview.png";
import { FaBars, FaRegBookmark } from "react-icons/fa6";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className="shadow bg-black">
        <div className="container px-14 py-3 mx-auto flex justify-between items-center">
          <div className="flex items-center justify-between">
            <Link href="#">
              <img className="w-24 h-20" src={logo} alt="Logo" />
            </Link>
          </div>

          
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black lg:relative lg:flex lg:items-center lg:justify-between ${
              isMenuOpen
                ? "top-16 opacity-100"
                : "top-[-400px] opacity-0 lg:opacity-100 lg:top-0"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:mx-10 lg:py-0">
              <a
                href="/error"
                className="px-2.5 py-2 font-bold transition-colors duration-300 transform rounded-lg text-gray-200 lg:mx-2 hover:text-slate-400"
              >
                Services
              </a>
              <a
                href="/error"
                className="px-2.5 py-2 font-bold transition-colors duration-300 transform rounded-lg text-gray-200 lg:mx-2 hover:text-slate-400"
              >
                About
              </a>
              <a
                href="/error"
                className="px-2.5 py-2 font-bold transition-colors duration-300 transform rounded-lg text-gray-200 lg:mx-2 hover:text-slate-400"
              >
                Blog
              </a>
              <a
                href="/error"
                className="px-2.5 py-2 font-bold transition-colors duration-300 transform rounded-lg text-gray-200 lg:mx-2 hover:text-slate-400"
              >
                Location
              </a>
              <a
                href="/error"
                className="px-2.5 py-2 font-bold transition-colors duration-300 transform rounded-lg text-gray-200 lg:mx-2 hover:text-slate-400"
              >
                Resources
              </a>
              <a
                href="/error"
                className="px-2.5 py-2 font-bold transition-colors duration-300 transform rounded-lg text-gray-200 lg:mx-2 hover:text-slate-400"
              >
                Contact
              </a>
              <a
                href="/error"
                className="px-2.5 py-2 font-bold transition-colors duration-300 transform rounded-lg text-gray-200 lg:mx-2 hover:text-slate-400"
              >
                More
              </a>
            </div>

            <div className="flex gap-2 items-center border border-l-4 border-red-600 hover:border-[#5C20EF] px-5 py-2">
              <div>
                <button className="text-white uppercase">Book Now</button>
              </div>
              <div className="text-white">
                <FaRegBookmark />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

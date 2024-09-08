import logo from "../../assets/logo/Screenshot_2024-08-17_164423-removebg-preview.png";
import { FaRegBookmark } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className=" shadow bg-black">
        <div className="container px-14 py-3 mx-auto md:flex">
          <div className="flex items-center justify-between">
            <a href="#">
              <img className="w-24 h-20" src={logo} alt="" />
            </a>
          </div>

          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  bg-black md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
            <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
              <a
                href="#"
                className="px-2.5 py-2 font-bold transition-colors duration-300 transform rounded-lg dark:text-gray-200  md:mx-2 hover:text-slate-400"
              >
                Services
              </a>
              <a
                href="#"
                className="px-2.5 py-2 font-bold  transition-colors duration-300 transform rounded-lg dark:text-gray-200  md:mx-2 hover:text-slate-400"
              >
                About
              </a>
              <a
                href="#"
                className="px-2.5 py-2 font-bold transition-colors duration-300 transform rounded-lg dark:text-gray-200   md:mx-2 hover:text-slate-400"
              >
                Blog
              </a>
              <a
                href="#"
                className="px-2.5 py-2 font-bold transition-colors duration-300 transform rounded-lg dark:text-gray-200   md:mx-2 hover:text-slate-400"
              >
                Location
              </a>
              <a
                href="#"
                className="px-2.5 py-2 font-bold transition-colors duration-300 transform rounded-lg dark:text-gray-200   md:mx-2 hover:text-slate-400"
              >
                Resources
              </a>
              <a
                href="#"
                className="px-2.5 py-2 font-bold transition-colors duration-300 transform rounded-lg dark:text-gray-200   md:mx-2 hover:text-slate-400"
              >
                Contact
              </a>
              <a
                href="#"
                className="px-2.5 py-2 font-bold transition-colors duration-300 transform rounded-lg dark:text-gray-200   md:mx-2 hover:text-slate-400"
              >
                More
              </a>
            </div>

            <div className="flex gap-2 items-center border border-l-4 border-red-600 hover:border-[#5C20EF] px-5 py-2">
              <div>
              <button className="text-white uppercase ">
                Book Now
              </button>
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

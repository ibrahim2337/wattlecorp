import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-[#121111] py-20">
      <div className="lg:ps-80 lg:pe-40 px-5">
        <div className="lg:flex">
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Links
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  community
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Careers
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Services
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Tec
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Music
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Videos
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Global Locations
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Mega cloud
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Aperion UI
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Meraki UI
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Social
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  +1 526 654 8965
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  example@email.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 justify-between border border-[#8A8281] py-5 px-5 mt-10">
          <div className="flex  gap-1 items-center">
            <div>
              <CiLocationOn className="text-[#8A8281] h-7 w-7" />
            </div>
            <div>
              <h3 className="text-[#8A8281] text-xs font-bold">Dubai</h3>
              <p className="text-[#8A8281] text-xs font-bold">+971 42541674</p>
            </div>
          </div>

          <div className="flex  gap-1 items-center">
            <div>
              <CiLocationOn className="text-[#8A8281] h-7 w-7" />
            </div>
            <div>
              <h3 className="text-[#8A8281] text-xs font-bold">US</h3>
              <p className="text-[#8A8281] text-xs font-bold">+1 415915 6662</p>
            </div>
          </div>

          <div className="flex  gap-1 items-center">
            <div>
              <CiLocationOn className="text-[#8A8281] h-7 w-7" />
            </div>
            <div>
              <h3 className="text-[#8A8281] text-xs font-bold">Kozhikode</h3>
              <p className="text-[#8A8281] text-xs font-bold">+91 8289885662</p>
            </div>
          </div>

          <div className="flex  gap-1 items-center">
            <div>
              <CiLocationOn className="text-[#8A8281] h-7 w-7" />
            </div>
            <div>
              <h3 className="text-[#8A8281] text-xs font-bold">Bangalore</h3>
              <p className="text-[#8A8281] text-xs font-bold">+91 8289885682</p>
            </div>
          </div>

          <div className="flex  gap-1 items-center">
            <div>
              <CiLocationOn className="text-[#8A8281] h-7 w-7" />
            </div>
            <div>
              <h3 className="text-[#8A8281] text-xs font-bold">Riyadh</h3>
              <p className="text-[#8A8281] text-xs font-bold">+971 42541674</p>
            </div>
          </div>
          
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;

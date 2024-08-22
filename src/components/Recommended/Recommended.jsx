
import { FaRobot } from "react-icons/fa6";

const Recommended = () => {
  return (
    <div className="bg-[#080707] lg:px-40 px-5 py-20">
      <div className=" text-center pb-10">
        <h1 className="text-red-100 text-4xl font-bold">
          Recommended Cybersecurity Services
        </h1>
        <p className="text-red-100 text-sm font-bold mt-5">
          Officially recommended by Hackers.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-5">
        <div className="border border-gray-900 p-5 hover:bg-black">
          <div className="">
            <FaRobot className="h-10 w-10 text-[#4D1BC7]" />
          </div>
          <h1 className="pt-5 text-lg font-bold text-white">
            Cyber Security Compliance Consulting
          </h1>
          <p className="pt-3 text-sm font-semibold text-[#423F3F]">
            Adding layers of security to servers.
          </p>
        </div>
        <div className="border border-gray-900 p-5 hover:bg-black">
          <div className="">
            <FaRobot className="h-10 w-10 text-[#4D1BC7]" />
          </div>
          <h1 className="pt-5 text-lg font-bold text-white">
            Managed <br /> security services
          </h1>
          <p className="pt-3 text-sm font-semibold text-[#423F3F]">
            360 Degree security coverage guaranteed.
          </p>
        </div>
        <div className="border border-gray-900 p-5 hover:bg-black">
          <div className="">
            <FaRobot className="h-10 w-10 text-[#4D1BC7]" />
          </div>
          <h1 className="pt-5 text-lg font-bold text-white">
            Cyber security strategic consulting
          </h1>
          <p className="pt-3 text-sm font-semibold text-[#423F3F]">
          Building secure strategies for security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommended;

import img from "../../assets/protuction/Screenshot_2024-08-23_214318-removebg-preview.png";
import { IoIosLock } from "react-icons/io";

const Program = () => {
  return (
    <div className="bg-[#121111] lg:px-40 py-20 px-5">
      <div className="grid lg:grid-cols-2 items-center">
        <div>
          <img src={img} className="h-96" alt="" />
        </div>
        <div>
          <h3 className="text-white text-md font-bold pb-5">
            Why choose the Penetration testing program from Wattlecorp ?
          </h3>
          <div className="flex lg:gap-1 gap-2 py-2 items-center">
            <IoIosLock className="text-white hover:text-[#9F3121]" />
            <h4 className="text-sm font-bold text-white">
              Deliver highly secure applications and reduce the cost of
              compliance
            </h4>
          </div>
          <div className="flex lg:gap-1 gap-2 py-2 items-center">
            <IoIosLock className="text-white hover:text-[#9F3121]" />
            <h4 className="text-sm font-bold text-white">
              Remove Complexities with vulnerability management and patch fixing
            </h4>
          </div>
          <div className="flex lg:gap-1 gap-2 py-2 items-center">
            <IoIosLock className="text-white hover:text-[#9F3121]" />
            <h4 className="text-sm font-bold text-white">
              Find business and logic flows that are not detected by automated
              testing.
            </h4>
          </div>
          <div className="flex lg:gap-1 gap-2 py-2 items-center">
            <IoIosLock className="text-white hover:text-[#9F3121]" />
            <h4 className="text-sm font-bold text-white">
              Secure applications from leaking sensitive customer data
            </h4>
          </div>
          <div className="flex lg:gap-1 gap-2 py-2 items-center">
            <IoIosLock className="text-white hover:text-[#9F3121]" />
            <h4 className="text-sm font-bold text-white">
              Identify network misconfiguration and vulnerabilities
            </h4>
          </div>
          <div className="flex lg:gap-1 gap-2 py-2 items-center">
            <IoIosLock className="text-white hover:text-[#9F3121]" />
            <h4 className="text-sm font-bold text-white">
              Reduce the cost of compliance and continuous security monitoring
            </h4>
          </div>
          <div className="flex lg:gap-1 gap-2 py-2 items-center">
            <IoIosLock className="text-white hover:text-[#9F3121]" />
            <h4 className="text-sm font-bold text-white">
              Reduce time to find and fix security vulnerabilities
            </h4>
          </div>
          <div className="flex lg:gap-1 gap-2 py-2 items-center">
            <IoIosLock className="text-white hover:text-[#9F3121]" />
            <h4 className="text-sm font-bold text-white">
              Improve speed and quality of delivering secure code by developers
            </h4>
          </div>
          <div className="flex lg:gap-1 gap-2 py-2 items-center">
            <IoIosLock className="text-white hover:text-[#9F3121]" />
            <h4 className="text-sm font-bold text-white">
              Exclusive dashboards to monitor the progress of applications
              security
            </h4>
          </div>
          <div className="flex lg:gap-1 gap-2 py-2 items-center">
            <IoIosLock className="text-white hover:text-[#9F3121]" />
            <h4 className="text-sm font-bold text-white">
            Use cybersecurity as a business advantage
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;

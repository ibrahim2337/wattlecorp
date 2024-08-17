import { FiLock } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

const Advantage = () => {
  return (
    <div className="bg-[#121111] lg:px-40 px-5 pt-20 pb-16">
      <h1 className="text-red-100 text-3xl pb-5 font-bold">
        Advantages for Every Security Stakeholder
      </h1>
      <div>
        <div className="lg:flex gap-5 bg-[#2B2626] py-4 px-5 mb-5">
          <div className="text-blue-500 ">
            <FiLock className="h-16 w-16" />
          </div>
          <div>
            <h1 className="text-red-100 text-md font-bold pb-2">
              Chief Information Security Officer and Information Security Team
            </h1>
            <p className="text-red-100 text-sm">
              Effortlessly manage risks, streamline compliance, and accelerate
              app delivery. Foster team collaboration, reduce testing costs
              without compromising quality and take charge of your testing
              program. Employ quick turnarounds, early problem detection, and
              continuous monitoring with our full-fledged chief security office
              and security team.
            </p>
          </div>
        </div>

        <div className="flex gap-5 bg-[#2B2626] py-4 px-5 mb-5">
          <div className="text-blue-500 ">
          <GrGroup className="h-16 w-16" />
          </div>
          <div>
            <h1 className="text-red-100 text-md font-bold pb-2">
              Chief Technology Officer And Product Development Team
            </h1>
            <p className="text-red-100 text-sm">
              Early release detection and fix for security vulnerabilities,
              faster remediation, improve application delivery agility, managed
              risk-based approach to security, easy collaboration with security
              testing team, fast turnaround times,.We offer live sessions and
              advanced analytics on your history of vulnerabilities, covering
              every aspect of the problem..
            </p>
          </div>
        </div>

        <div className="flex gap-5 bg-[#2B2626] py-4 px-5 ">
          <div className="text-blue-500 ">
          <CgProfile className="h-16 w-16" />
          </div>
          <div>
            <h1 className="text-red-100 text-md font-bold pb-2">
              Chief Executive Office And Business Management
            </h1>
            <p className="text-red-100 text-sm">
              Ensure Compliance to frequently changing regulatory landscape
              without cost overruns, protect brand reputation, predictable cost
              and simple billing, reduced administrative overheads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;

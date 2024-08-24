import { FiLock } from "react-icons/fi";

const News = () => {
  return (
    <div className="bg-[#121111] lg:px-40 px-5 pt-20">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 items-center justify-center">
        <div className=" bg-[#2B2626] p-5 text-center">
          <div className="text-[#5C20EF] flex justify-center ">
            <FiLock className="h-16 w-16" />
          </div>
          <div>
            <h1 className="text-red-100 text-lg font-bold pt-5 pb-2">Depth</h1>
            <p className="text-[#726c6c] font-semibold text-sm">
              Our hackers thoroughly investigate your system to find
              vulnerabilities.
            </p>
          </div>
        </div>

        <div className=" bg-[#2B2626] p-5 text-center">
          <div className="text-[#5C20EF] flex justify-center ">
            <FiLock className="h-16 w-16" />
          </div>
          <div>
            <h1 className="text-red-100 text-lg font-bold pt-5 pb-2">
              Standards
            </h1>
            <p className="text-[#726c6c] font-semibold text-sm">
              We use industry-standard tools to uncover even the worst security
              flaws.
            </p>
          </div>
        </div>

        <div className=" bg-[#2B2626] p-5 text-center">
          <div className="text-[#5C20EF] flex justify-center ">
            <FiLock className="h-16 w-16" />
          </div>
          <div>
            <h1 className="text-red-100 text-lg font-bold pt-5 pb-2">Report</h1>
            <p className="text-[#726c6c] font-semibold text-sm">
              Obtain a report on penetration testing that is written in everyday
              language.
            </p>
          </div>
        </div>

        <div className=" bg-[#2B2626] p-5 text-center">
          
          <div>
            <h1 className="text-red-100 text-lg font-bold pt-5 pb-2">Good news</h1>
            <p className="text-[#726c6c] font-semibold text-sm">
            Yes, your free consultation is just a click away.
            </p>
          </div>
          <button className="text-white uppercase font-bold px-6 py-1  border-l-4 border-l-[#D83E27] bg-[#5C20EF] hover:bg-[#D83E27] hover:border-l-[#5C20EF] mt-12">book now</button>
        </div>

      </div>
    </div>
  );
};

export default News;

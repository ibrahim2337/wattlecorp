import { GrServices } from "react-icons/gr";

const Budget = () => {
  return (
    <div className="bg-[#121111] lg:px-40  px-5 py-20">
      <div className="grid lg:grid-cols-2 gap-5 justify-center items-center">
        <div className=" items-center lg:text-left text-center">
          <h1 className="text-2xl font-bold  text-red-100">
            Budgeting for Penetration Testing in UAE
          </h1>

          <p className="text-sm font-semibold pt-6 text-red-100 ">
            Vulnerability scanning and penetration testing are different. Unlike
            vulnerability scan that only identifies vulnerabilities in your
            systems, a penetration tester digs deeper to detect and remove
            vulnerability of any scale in your system.
          </p>
          <p className="text-sm font-semibold pt-3 text-red-100 ">
            Penetration testing can cost you anywhere from 20000 AED for a
            small, simple app to more than 40000 AED for a feature-rich, complex
            app. This is why Wattlecorp provides a range of{" "}
            <span className="text-[#D83E27]">cybersecurity services</span> that
            are suitable for everyone from startups to enterprises without
            compromising on quality.
          </p>
          <h3 className="text-xl pt-6 font-bold  text-red-100">
            Get a Customized Quote
          </h3>
          <p className="text-sm font-bold py-5  text-red-100">
            Get a FREE quote for your penetration testing requirement. Talk to
            our experts today
          </p>
          <button className="text-white uppercase font-bold px-8 py-1 border-l-4 border-l-[#D83E27] bg-[#5C20EF] hover:bg-[#D83E27] hover:border-l-[#5C20EF] mt-5">
            contact now
          </button>
        </div>
        <div className="bg-[#2B2626] px-5 py-5  lg:ms-10">
            <div>
            <GrServices className="text-[#D83E27] h-10 w-10"  />
            </div>
            <h3  className="text-xl pt-4 font-bold  text-red-100">Penetration Testing as a Service</h3>
            <p className="text-sm font-bold pt-5 text-red-100">Wattlecorp’s penetration testing as a subscription service allows you to take advantage of reducing the cost of testing, whether you are a startup investing for the first time or an enterprise looking to reduce the cost of continuous testing. Choose from one-time to unlimited manual and automated penetration testing using a one-time, monthly, or annual subscription fee</p>

        </div>
      </div>
    </div>
  );
};

export default Budget;

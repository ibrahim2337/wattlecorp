import { RiSecurePaymentLine } from "react-icons/ri";

const Delivery = () => {
  return (
    <div className="bg-[#D83E27] py-16 lg:px-40 px-5">
      <div className="text-center ">
        <h1 className="text-white text-2xl font-bold">
          Penetration Testing Service Deliverables
        </h1>
        <button className="text-white px-5 py-2 mt-5 font-bold bg-[#5C20EF] hover:bg-red-600">
          Download Sample report
        </button>
      </div>

      <div className="lg:flex gap-5 pt-10 pb-5">
        <div className="basis-1/3 border p-5 bg-[#FDE8E5] hover:bg-white">
          <div>
            <RiSecurePaymentLine className="h-10 w-10 text-[#D83E27]" />
          </div>
          <h1 className="pt-5 text-lg font-bold text-[#2F2A2A]">
          Detailed Report
          </h1>
          <p className="pt-3 text-sm font-bold text-[#C3B5B3]">
          The pentest report details specific vulnerabilities identified on the platform, how they were identified, methods and tools used to identify them, and visual evidence if applicable. . The report comes with a security vulnerability risk rating
          </p>
        </div>

        <div className="basis-1/2 border p-5 bg-[#FDE8E5] hover:bg-white">
          <div>
            <RiSecurePaymentLine className="h-10 w-10 text-[#D83E27]" />
          </div>
          <h1 className="pt-5 text-lg font-bold text-[#2F2A2A]">
          1:1 Workshop
          </h1>
          <p className="pt-3 text-sm font-bold text-[#C3B5B3]">
          Static PDf Reports are not enough as vulnerabilities are not fixed immediately. That's why we provide a 1 on 1 workshop and a security debrief between the security team and developers to ensure they understand critical and high-level vulnerabilities along with along with guidance on how to reduce their risks in the future.
          </p>
        </div>
        <div className="basis-1/4 border p-5 bg-[#FDE8E5] hover:bg-white">
          <div>
            <RiSecurePaymentLine className="h-10 w-10 text-[#D83E27]" />
          </div>
          <h1 className="pt-5 text-lg font-bold text-[#2F2A2A]">
          Retesting
          </h1>
          <p className="pt-3 text-sm font-bold text-[#C3B5B3]">
          We offer a complimentary retest to ensure that the corrective actions were effective and carried out correctly. And after applying all available updates
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
      <div className="basis-1/2 border p-5 bg-[#FDE8E5] hover:bg-white">
          <div>
            <RiSecurePaymentLine className="h-10 w-10 text-[#D83E27]" />
          </div>
          <h1 className="pt-5 text-lg font-bold text-[#2F2A2A]">
          Secure Badge
          </h1>
          <p className="pt-3 text-sm font-bold text-[#C3B5B3]">
          After the customer has implemented the recommended repair actions, we offer free retesting. After the project has been completed, we will provide you with a summary report confirming that corrective measures have been taken. If deemed adequate, we also provide you with a service that alerts you to new vulnerabilities for up to a year.
          </p>
        </div>

        <div className="basis-1/2 border p-5 bg-[#FDE8E5] hover:bg-white">
          <div>
            <RiSecurePaymentLine className="h-10 w-10 text-[#D83E27]" />
          </div>
          <h1 className="pt-5 text-lg font-bold text-[#2F2A2A]">
          1:1 Advice On-Call
          </h1>
          <p className="pt-3 text-sm font-bold text-[#C3B5B3]">
          Get expert advice and assistance on every aspect of your cybersecurity through one-on-one calls after the submission of your security report. You can choose your convenient options to schedule your calls - from Zoom meetings to standard phone calls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

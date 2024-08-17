import img1 from "../../assets/background/Screenshot 2024-08-17 200540.png";

const Cybersecurity = () => {
  return (
    <div className="bg-[#121111] pt-20">
      <div className="grid lg:grid-cols-2 gap-5 lg:mx-40 mx-5">
        <div>
          <img src={img1} className="h-[480px]" alt="" />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-red-100">Cybersecurity Penetration Testing Services in UAE</h1>
          <p className="text-red-100 mt-5">
            VAPT (Vulnerability Analysis and Penetration Testing) is one of our
            most popular cyber security services in UAE, with more than 90% of
            our customers opting for it. As part of the penetration testing
            process, we assume the role of actual hackers and delve deeply into
            the target systems to identify vulnerabilities. <br />
            Penetration testing has become one of the most fundamental
            requirements in Dubai for cyber security services, and it is
            strongly advised to identify application weaknesses and
            vulnerabilities. Our professional team of hackers has been commended
            by Fortune 500 companies such as Bentley, Mercedes-Benz, and Walmart
            for penetrating their systems. <br />
            This team is now at your disposal to perform comprehensive testing
            on your systems and applications based on <span className="text-[#9F3121] font-bold">SIA (NESA)</span>, <span className="text-[#9F3121] font-bold">ISR</span> ,<span className="text-[#9F3121] font-bold">ISO
            27001</span> , ADSIC, CREST, <span className="text-[#9F3121] font-bold">ADHICS</span>, <span className="text-[#9F3121] font-bold">PCI DSS Compliance</span> requirements using the most effective cyber security strategies and industry-standard tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;

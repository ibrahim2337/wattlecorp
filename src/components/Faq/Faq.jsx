const Faq = () => {
  return (
   
      <div className="bg-[#D83E27] lg:px-72 ">
        <div className=" flex flex-col item justify-center px-4 py-10 mx-auto md:p-8">
          <h2 className="text-2xl font-bold sm:text-4xl text-center text-white">
            F.A.Q
          </h2>
          <p className="mt-4 mb-8 text-white font-bold text-sm  text-center">
            We have something for everyone, including pricing and answers.
          </p>
          <div className="space-y-4 bg-[#1D1D1D] px-6 py-6">
            <h3 className="text-xl font-bold text-white">General</h3>
            <h5 className="text-sm font-semibold text-[#747474] pb-4">
              Tip • Book a consultation to get personalised recommendations.
            </h5>
            <details className="w-full bg-[#383838] ">
              <summary className="px-4 py-3 text-sm font-bold focus:outline-none text-white">
                I am compliant with UAE data privacy regulations. Do I still
                need penetration testing?
              </summary>
              <p className="px-4 pb-5 text-sm text-[#747474] font-semibold">
                Yes. Cyber resilience is never a one-step solution. This is
                because newer vulnerabilities evolve day by day.{" "}
              </p>
            </details>
            <details className="w-full bg-[#383838]">
              <summary className="px-4 py-3 text-sm font-bold focus:outline-none text-white">
                How does penetration testing differ from other security
                assessments?
              </summary>
              <p className="px-4 pb-5 text-sm text-[#747474] font-semibold">
                Security assessment is like finding the possible weakness in the
                application, whereas penetration testing is finding how deep it
                can be attacked by a really bad actor.{" "}
              </p>
            </details>
            <details className="w-full bg-[#383838]">
              <summary className="px-4 py-3 text-sm font-bold focus:outline-none text-white">
                How much does penetration testing cost in the UAE?
              </summary>
              <p className="px-4 pb-5 text-sm text-[#747474] font-semibold">
                A typical penetration test will cost between $10,000 and
                $35,000. However, depending on the situation, it can go as
                little as $1,000.
              </p>
            </details>
            <details className="w-full bg-[#383838]">
              <summary className="px-4 py-3 text-sm font-bold focus:outline-none text-white">
                How is sensitive information handled during the penetration
                testing process?
              </summary>
              <p className="px-4 pb-5 text-sm text-[#747474] font-semibold">
                We employ a controlled environment, modest encryption standards,
                and various other anonymization strategies to handle your data
                carefully during penetration testing, based on its nature of
                sensitivity.
              </p>
            </details>
            <details className="w-full bg-[#383838]">
              <summary className="px-4 py-3 text-sm font-bold focus:outline-none text-white">
                What types of penetration testing services do you offer in the
                UAE?
              </summary>
              <p className="px-4 pb-5 text-sm text-[#747474] font-semibold">
                We Offer Web application security assessment, Mobile application
                security assessment, Network security assessment, API security
                assessment, Operational Technology security assessment, IoT
                security assessment, Secure code review, Annual security
                program, Approved Scanning Vendor, WordPress Security Audit &
                Assessment, Cloud Application Security Assessment, Wireless
                Penetration Testing, Security Architecture Review, Managed
                Threat Hunting, Device Security Audit & Assessment, Red Teaming,
                Purple team Assessment, ERP Security Audit, Email Security
                Audit, and SCADA VA/PT.
              </p>
            </details>
            <details className="w-full bg-[#383838]">
              <summary className="px-4 py-3 text-sm font-bold focus:outline-none text-white">
                What are the benefits of using a local penetration testing
                provider in the UAE?
              </summary>
              <p className="px-4 pb-5 text-sm text-[#747474] font-semibold">
                Relying on local penetration testing service providers helps you
                to tailor securing your business from the cybersecurity and
                threat landscape of the particular native. It also helps you to
                uncover unique and specific security challenges related to the
                same.
              </p>
            </details>
            <details className="w-full bg-[#383838]">
              <summary className="px-4 py-3 text-sm font-bold focus:outline-none text-white">
                How often should businesses in the UAE conduct penetration
                testing?
              </summary>
              <p className="px-4 pb-5 text-sm text-[#747474] font-semibold">
                At least once a year is always suggested by security
                professionals and various other organizations across the globe.
              </p>
            </details>
            <details className="w-full bg-[#383838]">
              <summary className="px-4 py-3 text-sm font-bold focus:outline-none text-white">
                Do you provide post-penetration testing support and assistance
                in remediation efforts for identified vulnerabilities in the
                UAE?
              </summary>
              <p className="px-4 pb-5 text-sm text-[#747474] font-semibold">
                Yes. Our commitment is towards your security continues even
                after the penetration testing until your business, and you are
                secure from the threats.
              </p>
            </details>
          </div>
        </div>
      </div>
   
  );
};

export default Faq;

const Explore = () => {
  return (
    <div className="bg-[#2B2626] lg:px-40 px-5 py-20">
      <div className="grid lg:grid-cols-2 gap-5 justify-center items-center">
        <div className=" items-center">
          <h3 className="text-xl font-bold text-white">Explore our strategy for penetration testing.</h3>
          <button className="text-white uppercase font-bold px-6 py-1 border-l-4 border-l-[#D83E27] bg-blue-600 hover:bg-[#D83E27] hover:border-l-blue-600 mt-5">Learn more</button>
        </div>
        <div>
          <p className="text-white text-sm font-bold text-justify">
            Learn more Our Penetration Testing Service relies on in-depth
            advanced security testing methodology, analyzes the inner workings
            of your applications and network configurations, and identifies
            critical issues, exposure points, and business logic flaws. We
            identify security vulnerabilities by combining automated and manual
            testing and removing false positives, assessing every aspect of the
            security of your application and networks. Projects start with an
            understanding of the business logic and workflows application and
            network architectures. Our <span className="text-[#D83E27]">expert team</span> deploys advanced automated
            tech to detect the vulnerabilities in your automated tools, ensuring
            every detail is checked. But we don’t stop there. We also personally
            verify each result for unmatched accuracy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;

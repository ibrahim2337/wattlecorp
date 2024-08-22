import articleImg1 from "../../assets/articlas/Screenshot 2024-08-20 193815.png";
import articleImg2 from "../../assets/articlas/Screenshot 2024-08-20 193835.png";
import articleImg3 from "../../assets/articlas/Screenshot 2024-08-20 193854.png";
const Articles = () => {
  return (
    <div className="bg-[#0A0A0A] lg:px-40 px-5 py-20">
      <div className=" text-center pb-10">
        <h1 className="text-red-100 text-4xl font-bold">Recent Articles</h1>
        <p className="text-red-100 text-sm font-bold mt-5">
          stay up to date with recent news.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-5 ">
        <div>
          <img src={articleImg1} className="w-full" alt="" />
          <div className="bg-[#1B1B1B] px-5 py-5">
            <h3 className=" text-red-100 text-md font-bold">
              API Security Testing: A Comprehensive Guide [2024]
            </h3>
            <p className="text-[#423F3F] text-sm font-semibold mt-5">
              The steady growth of API analytics since its inception has been
              explosive and This growth reflects organisations’ broader need to
              holistically assess the business and digital transformation
              impacts of API…
            </p>
          </div>
        </div>
        <div>
          <img src={articleImg2} className="w-full" alt="" />
          <div className="bg-[#1B1B1B] px-5 py-5">
            <h3 className=" text-red-100 text-md font-bold">
              Penetration Testing Cost: A Comprehensive Guide for Businesses
            </h3>
            <p className="text-[#423F3F] text-sm font-semibold mt-5">
              Penetration testing has proven to secure businesses from the
              ever-evolving vulnerability landscape at present. It can simply be
              described as a technique that helps businesses uncover loopholes…
            </p>
          </div>
        </div>
        <div>
          <img src={articleImg3} className="w-full" alt="" />
          <div className="bg-[#1B1B1B] px-5 py-5">
            <h3 className=" text-red-100 text-md font-bold">
              Cybersecurity Threat Intelligence: Why It’s Essential for Business
            </h3>
            <p className="text-[#423F3F] text-sm font-semibold mt-5">
              Cybersecurity threat intelligence is one of the most evolving
              weapons businesses can use to combat potential digital hazards.
              Yet, many organizations are still confused about threat
              intelligence and how to…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;

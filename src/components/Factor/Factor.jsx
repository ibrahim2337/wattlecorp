import factorImg from "../../assets/protuction/factor.png"

const Factor = () => {
    return (
        <div className="bg-[#121111] lg:px-40  px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-5 justify-center items-center">
          <div className=" items-center">
            <h3 className="text-xl font-bold text-white">Explore our strategy for penetration testing.</h3>
            <button className="text-white uppercase font-bold px-6 py-1 border-l-4 border-l-[#D83E27] bg-blue-600 hover:bg-[#D83E27] hover:border-l-blue-600 mt-5">Learn more</button>
          </div>
          <div className="flex justify-center">
           <img src={factorImg} className="" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Factor;
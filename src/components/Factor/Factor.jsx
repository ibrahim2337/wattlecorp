import factorImg from "../../assets/protuction/factor.png"

const Factor = () => {
    return (
        <div className="bg-[#121111] lg:px-40  px-5 py-20">
        <div className="grid lg:grid-cols-2  gap-5 justify-center items-center">
          <div className=" items-center lg:text-left text-center">
            <h3 className="text-lg font-bold uppercase text-red-100">Price factor ----
            </h3>
            <h1 className="text-4xl font-bold py-5 text-red-100">100% Free. 100% Clear.</h1>
            <p className="text-sm font-semibold text-red-100 ">We offer 100% free consultation for a limited time to prevent the misuse of our consulting services. Our team is excited to see opportunities in making your digital assets safe and our commitment towards making it happen is always on. Use this free consultation to understand your cyber security needs. We’d love to chat about your objectives. We welcome the chance to connect and explore opportunities to accelerate your journey to secure your digital assets.</p>
            <p className="text-sm font-bold py-5  text-[#6e6d6d]">You’re about to get 4000 AED worth consultation for free.</p>
            <button className="text-white uppercase font-bold px-6 py-1 border-l-4 border-l-[#D83E27] bg-[#5C20EF] hover:bg-[#D83E27] hover:border-l-[#5C20EF] mt-5">book today</button>
          </div>
          <div className="flex justify-center">
           <img src={factorImg} className="" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Factor;
import { Link } from "react-router-dom";
import "./Modal.css";

const Modal = () => {
  return (
    <div className="bg-[#080101] py-5">
      <div className="grid lg:grid-cols-12 grid-cols-1  bg-[#202020] justify-center lg:mx-64 mx-5 p-5">
        <div className="lg:col-span-5">
          <button className="text-red-700 bg-slate-500 px-7 py-2 rounded-md my-5">
            Connect Wattlecorp
          </button>
          <h1 className="text-red-100 text-4xl font-bold">
            Protecting <br /> your Business
          </h1>
          <p className="text-red-100 text-xs mt-6 font-bold">Book a free consultation with us .</p>
        </div>
        <div className="lg:col-span-7 px-5 bg-[#252525] py-5">
          <h3 className="text-red-100 text-2xl font-bold">Enquire Now</h3>
          <p className="text-red-100 mt-2">Ask our experts.</p>
          <form className="">
            <div className=" mt-1 ">
              <div className="flex-1 px-2">
                <input
                  type="text"
                  placeholder="Name"
                  className=" w-full px-5 py-3 mt-2 text-sm font-bold bg-[#202020] border-l-2 text-red-100 placeholder-[#5F5A59] "
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <input
                  type="email"
                  placeholder="Email"
                  className=" w-full  px-5 py-3 mt-2 text-sm font-bold bg-[#202020] border-l-2 text-red-100 placeholder-[#5F5A59] "
                />
              </div>

              <div className="flex-1 px-2">
                <input
                  type="text"
                  placeholder="Phone"
                  className=" w-full px-5 py-3 mt-2 text-sm font-bold bg-[#202020] border-l-2 text-red-100 placeholder-[#5F5A59] "
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <input
                  type="email"
                  placeholder="Company"
                  className=" w-full  px-5 py-3 mt-2 text-sm font-bold bg-[#202020] border-l-2 text-red-100 placeholder-[#5F5A59] "
                />
              </div>

              <div className="flex-1 px-2">
                <input
                  type="text"
                  placeholder="Country"
                  className=" w-full px-5 py-3 mt-2 text-sm font-bold bg-[#202020] border-l-2 text-red-100 placeholder-[#5F5A59] "
                />
              </div>

              <div className="flex-1 px-2">
                <textarea
                  className="w-full h-20 px-5 py-3 mt-2 text-sm font-bold bg-[#202020] border-l-2 text-red-100 placeholder-[#5F5A59] "
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <button className=" w-full px-5 py-3 mt-2 text-sm font-bold text-white bg-[#252525] border border-[#D83E27] hover:border-[#5C20EF]">
                  SUBMIT
                </button>
               <Link to ='/home'>
               <button className=" w-full px-5 py-3 mt-2 text-sm font-bold text-white bg-[#252525] border border-[#D83E27] hover:border-[#5C20EF]">
                  Back to Home
                </button>
               </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

const Touch = () => {
  return (
    <div>
      <section className=" bg-[#202020] py-20 ">
        <div className="text-center px-5">
          <h3 className="text-[#5C20EF] font-bold uppercase">
            ---- One more step ----
          </h3>
          <h1 className="text-red-100 text-4xl font-bold my-6">
            Secure your Data – Get in Touch with us Now!
          </h1>
          <p className="text-red-100 text-sm font-bold">
            All you need to do is fill the form below.
          </p>
        </div>

        <div className="flex flex-col justify-center w-full mt-10 lg:px-64 px-5">
          <form className="lg:px-10 px-5 bg-[#252525] py-10">
            <div className="w-full">
              <textarea
                className=" w-full h-20 px-5 py-3 mt-2 text-sm font-bold bg-[#202020] border-l-2 text-red-100 placeholder-[#5F5A59] "
                placeholder="Message"
              ></textarea>
            </div>
            <div className="-mx-2 mt-1 md:items-center md:flex">
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
            </div>
            <div className="-mx-2 mt-2 md:items-center md:flex">
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
            </div>
            <div className="-mx-2 mt-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <input
                  type="text"
                  placeholder="Country"
                  className=" w-full px-5 py-3 mt-2 text-sm font-bold bg-[#202020] border-l-2 text-red-100 placeholder-[#5F5A59] "
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
               <button className=" w-full px-5 py-3 mt-2 text-sm font-bold text-white bg-[#252525] border border-[#5C20EF]">SEND</button>
              </div>
            </div>
            
          </form>
        </div>
      </section>
    </div>
  );
};

export default Touch;

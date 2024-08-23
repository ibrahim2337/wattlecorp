

const Request = () => {
  return (
    <div>
      <section className="py-8 bg-[#D83E27] lg:px-40 px-5">
        <div className="container mx-auto flex flex-col gap-10 items-center text-center justify-center  lg:flex-row lg:justify-between ">
          <div>
          <h1 className="text-4xl font-bold text-white leading-tight text-center lg:text-left">
          Request A Free Consultation
          </h1>
          <p className="text-sm pt-10 font-bold text-white lg:text-left ">Sometimes, all you need is an extra hand.</p>
          </div>
          <button className="px-10 py-5 mt-2 text-sm font-bold text-white uppercase bg-[#5C20EF] hover:bg-[#252525] border-l-4 border-l-[#5C20EF]">book meeting   </button>
      
        </div>
      </section>
    </div>
  );
};

export default Request;

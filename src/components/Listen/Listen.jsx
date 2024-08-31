import "./Listen.css";

const Listen = () => {
  return (
    <div className="listen bg-black">
      <div className="grid lg:grid-cols-2 justify-center items-center gap-20 py-20 lg:px-40 px-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-100">Listen to People</h1>
          <p className="text-[#a09f9f] text-sm font-semibold py-8">
            We help companies in UAE to protect their online assets.
          </p>
          <p className="text-red-100 text-sm font-semibold pt-3">
            Wattlecorp team took barely 3 days to figure out the issues I had on
            my application. Their team consistently worked with my developer
            team to build a security system for my application which deals with
            sensitive data. Thank you team for your genius work.
          </p>
          <h3 className="text-red-100 text-lg font-bold mt-8">CEO</h3>
          <p className="text-[#6e6d6d] text-xs">
            Health Tech Company at Dubai, UAE
          </p>
        </div>
        <div className="bg-[#121111] text-center px-10 py-10  lg:ms-32">
          <h1 className="text-red-100 text-4xl font-bold items-center">Explore More Services</h1>
          <button className="text-red-100 text-sm font-bold pt-10 hover:text-[#9F3121] hover:text-lg">Explore More Services</button>
        </div>
      </div>
    </div>
  );
};

export default Listen;

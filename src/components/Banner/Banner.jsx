import './Banner.css'
const Banner = () => {
  return (
    <div className="image py-8">
        <div className="text-center items-center lg:mx-96 mx-5 ">
      <h1 className="text-white lg:text-4xl text-2xl font-extrabold">
        Penetration Testing Company In  UAE
      </h1>
      <p className="text-white mt-10">
        The leading penetration testing company in UAE to uncover
        vulnerabilities in your applications before an attacker does. We empower
        you to remain robust by identifying and mitigating threats in your
        system or network proactively and to stay a step ahead in today’s
        technological landscape with our future-proof penetration testing
        services in UAE.
      </p>
      <button className="text-white px-5 py-2 my-10  font-bold bg-[#5C20EF] hover:bg-red-600">
        SCHEDULE A PEN TEST
      </button>
    </div>
    </div>
  );
};

export default Banner;

import { Link } from "react-router-dom";
import errorImg from "../../assets/error/view-3d-boy-using-laptop-removebg-preview.png";

const ErrorPage = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:px-20 bg-[#202020] px-5 py-16 justify-center items-center">
      <div>
        <img src={errorImg} alt="" />
      </div>
      <div>
        <div className="flex items-center h-full ">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h2 className="mb-8 text-red-100 font-extrabold text-9xl ">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl text-red-100 font-semibold md:text-3xl">
                Sorry, we couldn't find this page.
              </p>
              <p className="mt-4 mb-8 text-red-100 ">
                But don't worry, you can find plenty of other things on our
                homepage.
              </p>
              <Link
                rel="noopener noreferrer"
                to="/"
                className="px-8 py-3 font-semibold rounded-md  text-white bg-[#252525] border border-[#D83E27] hover:border-[#5C20EF]"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

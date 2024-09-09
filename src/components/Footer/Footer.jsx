import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import footerImg from "../../assets/footer/Screenshot 2024-09-08 135355.png"

const Footer = () => {
  return (
    <div className="bg-[#121111] py-10">
      <div className="lg:ps-80 lg:pe-40 px-5">
        <div className="lg:flex">
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
              <div>
                <div>
                  <h3 className="text-red-100 font-bold text-lg pb-5">Links</h3>
                  <a
                    href="#"
                    className="block text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                  >
                    FAQs
                  </a>
                  <a
                    href="#"
                    className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                  >
                    Terms
                  </a>
                  <a
                    href="#"
                    className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                  >
                    Sitemap
                  </a>
                  <a
                    href="#"
                    className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                  >
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <h3 className="text-red-100 font-bold text-lg my-5">
                    Products
                  </h3>
                  <a
                    href="#"
                    className="block text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                  >
                    Wattlecorp Security Suite
                  </a>
                  <a
                    href="#"
                    className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                  >
                    Wattlefort
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-red-100 font-bold text-lg mb-5">
                  Services
                </h3>
                <a
                  href="#"
                  className="block text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  Cloud Security
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  E-commerce Security
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  Email Security
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  ERP Security
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  Firewall Security
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  ICS Security
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  OT Threat Hunting
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  Pro Active Threat Hunting
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  Security Architecture Review
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  Secure Source Code Review
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  Virtual CISO Consulting
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  Office 365 Security g
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  Azure cloud Hardening
                </a>
              </div>

              <div>
                <h3 className="text-red-100 font-bold text-lg mb-5">
                  Global Locations
                </h3>
                <a
                  href="#"
                  className="block text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  US
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  UK
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  India
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  Saudi Arabia
                </a>
                <a
                  href="#"
                  className="block mt-1 text-sm text-[#8A8281] hover:text-[#DA3B23] hover:underline"
                >
                  Singapore
                </a>
              </div>

              <div>
              <div>
                <h3 className="text-red-100 font-bold text-lg mb-5">Social</h3>
                <div className="flex gap-1 items-center hover:underline">
                  <FaFacebook className="text-[#8A8281] hover:text-[#DA3B23] h-3 w-3" />
                  <a
                    href="#"
                    className="block text-sm text-[#8A8281] hover:text-[#DA3B23]"
                  >
                    Facebook
                  </a>
                </div>
                <div className="flex gap-1  mt-1 items-center hover:underline">
                  <FaInstagram className="text-[#8A8281] hover:text-[#DA3B23] h-3 w-3" />
                  <a
                    href="#"
                    className="block text-sm text-[#8A8281] hover:text-[#DA3B23]"
                  >
                    Instagram
                  </a>
                </div>
                <div className="flex gap-1  mt-1 items-center hover:underline">
                  <FaTwitter className="text-[#8A8281] hover:text-[#DA3B23] h-3 w-3" />
                  <a
                    href="#"
                    className="block text-sm text-[#8A8281] hover:text-[#DA3B23]"
                  >
                    Twitter
                  </a>
                </div>
                <div className="flex gap-1  mt-1 items-center hover:underline">
                  <FaLinkedin className="text-[#8A8281] hover:text-[#DA3B23] h-3 w-3" />
                  <a
                    href="#"
                    className="block text-sm text-[#8A8281] hover:text-[#DA3B23]"
                  >
                    Linkedin
                  </a>
                </div>
                <div className="flex gap-1  mt-1 items-center hover:underline">
                  <FaYoutube className="text-[#8A8281] hover:text-[#DA3B23] h-3 w-3" />
                  <a
                    href="#"
                    className="block text-sm text-[#8A8281] hover:text-[#DA3B23]"
                  >
                    Youtube
                  </a>
                </div>
              </div>
              <div className="mt-5">
                <img src={footerImg} alt="" />
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 justify-between border border-[#8A8281] py-5 px-5 mt-10">
          <div className="flex  gap-1 items-center">
            <div>
              <CiLocationOn className="text-[#8A8281] h-7 w-7" />
            </div>
            <div>
              <h3 className="text-[#8A8281] text-xs font-bold">Dubai</h3>
              <p className="text-[#8A8281] text-xs font-bold">+971 42541674</p>
            </div>
          </div>

          <div className="flex  gap-1 items-center">
            <div>
              <CiLocationOn className="text-[#8A8281] h-7 w-7" />
            </div>
            <div>
              <h3 className="text-[#8A8281] text-xs font-bold">US</h3>
              <p className="text-[#8A8281] text-xs font-bold">+1 415915 6662</p>
            </div>
          </div>

          <div className="flex  gap-1 items-center">
            <div>
              <CiLocationOn className="text-[#8A8281] h-7 w-7" />
            </div>
            <div>
              <h3 className="text-[#8A8281] text-xs font-bold">Kozhikode</h3>
              <p className="text-[#8A8281] text-xs font-bold">+91 8289885662</p>
            </div>
          </div>

          <div className="flex  gap-1 items-center">
            <div>
              <CiLocationOn className="text-[#8A8281] h-7 w-7" />
            </div>
            <div>
              <h3 className="text-[#8A8281] text-xs font-bold">Bangalore</h3>
              <p className="text-[#8A8281] text-xs font-bold">+91 8289885682</p>
            </div>
          </div>

          <div className="flex  gap-1 items-center">
            <div>
              <CiLocationOn className="text-[#8A8281] h-7 w-7" />
            </div>
            <div>
              <h3 className="text-[#8A8281] text-xs font-bold">Riyadh</h3>
              <p className="text-[#8A8281] text-xs font-bold">+971 42541674</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 pt-5 text-center">
          <h4 className="text-[#8A8281] lg:text-start md:text-start text-xs font-semibold">
            © 2024 All Rights Reserved
          </h4>
          <h4 className="text-[#8A8281] lg:text-end md:text-end text-xs font-semibold">
            Wattlecorp Cyber Risk Management Services LLC
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;

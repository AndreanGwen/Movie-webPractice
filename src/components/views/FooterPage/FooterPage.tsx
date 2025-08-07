import Icon from "@/components/commons/Icon";
import { DarkMode } from "@/context/darkModeContext/darkModeContext";
import Link from "next/link";
import { useContext } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

const FooterPage = () => {
  const context = useContext(DarkMode);
  if (!context) {
    throw new Error("DarkMode context is not provided");
  }
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { isDarkMode, setIsDarkMode } = context;

  return (
    <div
      className={`pt-5 pb-5 pl-3 pr-3 lg:pt-0 lg:pr-16 lg:pl-16 lg:pb-0 w-full lg:h-40 h-32 ${
        isDarkMode ? "bg-[#151717]" : "bg-white"
      }`}
    >
      <div
        className={`w-full border-t-1 ${
          isDarkMode ? "border-white/30" : "border-black"
        } flex items-center h-full`}
      >
        <div className="w-full flex lg:justify-between justify-end items-center">
          <div className="lg:block hidden">
            <Icon
              isMobileTrue="20"
              isMobileFalse="30"
              font="text-xl"
              lgFont="text-xl"
            />
            <p className={`${isDarkMode ? "text-white/60" : "text-black"}`}>
              &copy; 2025,fordFlex
            </p>
          </div>

          <div className="lg:flex gap-16 hidden">
            <Link href="/main">
              <p
                className={`${
                  isDarkMode ? "text-white/60" : "text-black"
                } text-medium hover:underline hover:underline-offset-8 hover:text-red-500 font-semibold transition-all lg:block hidden`}
              >
                MAIN
              </p>
            </Link>
            <Link href="/schedules">
              <p
                className={`${
                  isDarkMode ? "text-white/60" : "text-black"
                } text-medium hover:underline hover:underline-offset-8 hover:text-red-500 font-semibold transition-all lg:block hidden`}
              >
                SCHEDULES
              </p>
            </Link>
            <Link href="/tickets">
              <p
                className={`${
                  isDarkMode ? "text-white/60" : "text-black"
                } text-medium hover:underline hover:underline-offset-8 hover:text-red-500 font-semibold transition-all lg:block hidden`}
              >
                TICKETS
              </p>
            </Link>
            <Link href="/news">
              <p
                className={`${
                  isDarkMode ? "text-white/60" : "text-black"
                } text-medium hover:underline hover:underline-offset-8 hover:text-red-500 font-semibold transition-all lg:block hidden`}
              >
                NEWS
              </p>
            </Link>
            <Link href="/contact">
              <p
                className={`${
                  isDarkMode ? "text-white/60" : "text-black"
                } text-medium hover:underline hover:underline-offset-8 hover:text-red-500 font-semibold transition-all lg:block hidden`}
              >
                CONTACT
              </p>
            </Link>
          </div>

          <div className="flex gap-5">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                isDarkMode ? "border-white" : "border-black"
              }`}
            >
              <FaInstagram
                size={23}
                color={`${isDarkMode ? "white" : "black"}`}
              />
            </div>
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                isDarkMode ? "border-white" : "border-black"
              }`}
            >
              <FaGithub size={23} color={`${isDarkMode ? "white" : "black"}`} />
            </div>
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                isDarkMode ? "border-white" : "border-black"
              }`}
            >
              <IoLogoVercel
                size={23}
                color={`${isDarkMode ? "white" : "black"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;

import { DarkMode } from "@/context/darkModeContext/darkModeContext";
import Link from "next/link";
import { useContext } from "react";
import { BsMoon } from "react-icons/bs";
import { FaVideo } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

interface Props {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = () => {
  const context = useContext(DarkMode);

  if (!context) {
    throw new Error("DarkMode context is not provided");
  }

  const { isDarkMode, setIsDarkMode } = context;

  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="w-full lg:h-32 h-20 flex items-center lg:pl-20 lg:pr-20 pl-5 pr-5">
      <div className="flex justify-between w-full items-center">
        <Link href="/">
          <div className="flex items-center gap-2">
            <FaVideo
              color={`${isDarkMode ? "white" : "black"}`}
              size={isMobile ? 30 : 40}
            />
            <h1
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } font-bold lg:text-3xl text-xl`}
            >
              flex
              <span
                className="font-bold lg:text-3xl text-xl"
                style={{ color: "#f31260" }}
              >
                ford
              </span>
            </h1>
          </div>
        </Link>

        <div className="lg:flex gap-20  items-center">
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

          <div
            className={`rounded-full ${
              isDarkMode ? "border-white/50" : " border-black"
            } border-1 p-1`}
          >
            {isDarkMode ? (
              <IoSunnyOutline
                color="white"
                size={25}
                className="cursor-pointer"
                onClick={() => setIsDarkMode(!isDarkMode)}
              />
            ) : (
              <BsMoon
                color="black"
                size={25}
                className="cursor-pointer"
                onClick={() => setIsDarkMode(!isDarkMode)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

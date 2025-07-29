import { DarkMode } from "@/context/darkModeContext/darkModeContext";
import { Input } from "@heroui/react";
import { useContext } from "react";
import { FaChevronDown } from "react-icons/fa6";

const BarSearch = () => {
  const context = useContext(DarkMode);

  if (!context) {
    throw new Error("DarkMode context is not provided");
  }

  const { isDarkMode, setIsDarkMode } = context;

  return (
    <div className="lg:pt-10 lg:pr-16 lg:pl-16 lg:pb-5 pt-5 pr-3 pl-3 pb-5">
      <div className="flex justify-between">
        <div className="flex gap-16 pb-5">
          <div
            className={`${
              isDarkMode ? "text-white" : "text-black"
            }  flex items-center gap-2`}
          >
            <p>All Formats</p>
            <FaChevronDown size={10} />
          </div>
          <div
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } lg:flex items-center gap-2 hidden`}
          >
            <p>By Date</p>
            <FaChevronDown size={10} />
          </div>
          <div
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } lg:flex items-center gap-2 hidden`}
          >
            <p>By category</p>
            <FaChevronDown size={10} />
          </div>
          <div
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } lg:flex items-center gap-2 hidden`}
          >
            <p>Coming Soon</p>
          </div>
        </div>

        <div className="">
          <input
            type="text"
            className={`bg-transparent border-1 ${
              isDarkMode ? "border-white text-white" : "border-black"
            } rounded-lg lg:w-60 lg:h-8 p-1 w-40`}
            placeholder="Search movies"
            name="search"
          />
        </div>
      </div>

      <div className="flex lg:pt-0 pt-1">
        <div className="border-b-2 w-1/12 border-danger" />
        <div
          className={`border-b-2 w-11/12  ${
            isDarkMode ? "border-white" : "border-black"
          }`}
        />
      </div>
    </div>
  );
};

export default BarSearch;

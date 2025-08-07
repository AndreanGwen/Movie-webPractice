import { DarkMode } from "@/context/darkModeContext/darkModeContext";
import { useSearchValue } from "@/context/searchValueContext/searchValueContext";
import { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const BarSearch = () => {
  const context = useContext(DarkMode);

  if (!context) {
    throw new Error("DarkMode context is not provided");
  }

  const { isDarkMode, setIsDarkMode } = context;
  const { isValue, setIsValue } = useSearchValue();
  const [localValue, setIsLocalValue] = useState("");

  console.log(isValue);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      setIsValue(localValue);
    }
  };

  return (
    <div className="pt-5 pb-5 pl-3 pr-3 lg:pt-10 lg:pr-16 lg:pl-16 lg:pb-5">
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
            value={localValue}
            onChange={(e) => setIsLocalValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div className="flex pt-1 lg:pt-0">
        <div className="w-1/12 border-b-2 border-danger" />
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

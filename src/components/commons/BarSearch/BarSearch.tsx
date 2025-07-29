import { Input } from "@heroui/react";
import { FaChevronDown } from "react-icons/fa6";

const BarSearch = () => {
  return (
    <div className="lg:pt-10 lg:pr-16 lg:pl-16 lg:pb-5 pt-5 pr-3 pl-3 pb-5">
      <div className="flex justify-between">
        <div className="flex gap-16 pb-5">
          <div className="text-white flex items-center gap-2">
            <p>All Formats</p>
            <FaChevronDown size={10} />
          </div>
          <div className="text-white lg:flex items-center gap-2 hidden">
            <p>By Date</p>
            <FaChevronDown size={10} />
          </div>
          <div className="text-white lg:flex items-center gap-2 hidden">
            <p>By category</p>
            <FaChevronDown size={10} />
          </div>
          <div className="text-white lg:flex items-center gap-2 hidden">
            <p>Coming Soon</p>
          </div>
        </div>

        <div className="">
          <input
            type="text"
            className="bg-transparent border-1 border-white rounded-lg lg:w-60 lg:h-8 p-1 w-40"
            placeholder="Search movies"
          />
        </div>
      </div>

      <div className="flex lg:pt-0 pt-1">
        <div className="border-b-2 w-1/12 border-danger" />
        <div className="border-b-2 w-11/12  border-white" />
      </div>
    </div>
  );
};

export default BarSearch;

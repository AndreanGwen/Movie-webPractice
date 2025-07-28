import { Input } from "@heroui/react";
import { FaChevronDown } from "react-icons/fa6";

const BarSearch = () => {
  return (
    <div className="pt-10 pr-16 pl-16 pb-5">
      <div className="flex justify-between">
        <div className="flex gap-16 pb-5">
          <div className="text-white flex items-center gap-2">
            <p>All Formats</p>
            <FaChevronDown size={10} />
          </div>
          <div className="text-white flex items-center gap-2">
            <p>By Date</p>
            <FaChevronDown size={10} />
          </div>
          <div className="text-white flex items-center gap-2">
            <p>By category</p>
            <FaChevronDown size={10} />
          </div>
          <div className="text-white flex items-center gap-2">
            <p>Coming Soon</p>
          </div>
        </div>

        <div className="">
          <Input
            placeholder={`Search ur movie`}
            type="text"
            variant="bordered"
            color="danger"
            className="text-white w-52"
          />
        </div>
      </div>

      <div className="flex">
        <div className="border-b-2 w-1/12 border-danger" />
        <div className="border-b-2 w-11/12  border-white" />
      </div>
    </div>
  );
};

export default BarSearch;

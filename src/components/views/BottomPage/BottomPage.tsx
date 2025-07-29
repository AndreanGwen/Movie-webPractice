import { DarkMode } from "@/context/darkModeContext/darkModeContext";
import { useApiInterstellar } from "@/libs/axios/apiInterstellar";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { useContext } from "react";
import { FaAward, FaUser } from "react-icons/fa6";

const BottomPage = () => {
  const movie = useApiInterstellar();
  const writer = movie?.Writer.split(", ");

  const context = useContext(DarkMode);

  if (!context) {
    throw new Error("DarkMode context is not provided");
  }

  const { isDarkMode, setIsDarkMode } = context;

  return (
    <div
      className={`w-full lg:h-40 lg:pl-20 lg:pr-20  lg:flex items-center justify-between hidden ${
        isDarkMode ? "bg-[#111112]" : "bg-white"
      } `}
    >
      <div className="">
        <h2
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } text-2xl flex items-center gap-1`}
        >
          <span>
            <FaUser />
          </span>
          Director:
        </h2>
        <p className=" ">{movie?.Director}</p>
      </div>
      <div className="">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } w-40 flex`}
            >
              Show writers
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="edit">{writer?.[0]}</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              {writer?.[1]}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="lg:block hidden">
        <h2
          className={`${
            isDarkMode ? "text-white" : "text-black"
          }  text-2xl flex items-center gap-1`}
        >
          <span>
            <FaAward size={25} />
          </span>
          Awards:
        </h2>
        <p className={`${isDarkMode ? "text-white" : "text-black"}`}>
          {movie?.Awards}
        </p>
      </div>
      <div className="lg:block hidden">
        <Button color="danger" className="w-40 rounded-full">
          IMDB{" "}
        </Button>
      </div>
    </div>
  );
};

export default BottomPage;

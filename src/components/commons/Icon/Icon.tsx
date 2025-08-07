import { DarkMode } from "@/context/darkModeContext/darkModeContext";
import Link from "next/link";
import { useContext } from "react";
import { FaVideo } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

interface PropTypes {
  isMobileTrue: string;
  isMobileFalse: string;
  lgFont: string;
  font: string;
}

const Icon = (props: PropTypes) => {
  const { isMobileTrue, isMobileFalse, lgFont, font } = props;

  const context = useContext(DarkMode);
  if (!context) {
    throw new Error("DarkMode context is not provided");
  }
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { isDarkMode, setIsDarkMode } = context;

  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <FaVideo
          color={`${isDarkMode ? "white" : "black"}`}
          size={isMobile ? isMobileTrue : isMobileFalse} // 3040
        />
        <h1
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } font-bold lg:${lgFont} ${font}`}
        >
          flex
          <span
            className={`font-bold lg:${lgFont} ${font}`}
            style={{ color: "#f31260" }}
          >
            ford
          </span>
        </h1>
      </div>
    </Link>
  );
};

export default Icon;

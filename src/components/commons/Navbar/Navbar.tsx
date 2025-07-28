import Link from "next/link";
import { FaVideo } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="w-full lg:h-32 h-20 flex items-center lg:pl-20 lg:pr-20 pl-5 pr-5">
      <div className="flex justify-between w-full items-center">
        <Link href="/">
          <div className="flex items-center gap-2">
            <FaVideo color="white" size={35} />
            <h1 className="text-white font-bold text-3xl">
              flex
              <span className="font-bold text-3xl" style={{ color: "#f31260" }}>
                ford
              </span>
            </h1>
          </div>
        </Link>

        <div className="lg:flex gap-20 hidden">
          <Link href="/main">
            <p className="text-white/60 text-medium hover:underline hover:underline-offset-8 hover:text-red-500 font-semibold transition-all">
              MAIN
            </p>
          </Link>
          <Link href="/schedules">
            <p className="text-white/60 text-medium hover:underline hover:underline-offset-8 hover:text-red-500 font-semibold transition-all">
              SCHEDULES
            </p>
          </Link>
          <Link href="/tickets">
            <p className="text-white/60 text-medium hover:underline hover:underline-offset-8 hover:text-red-500 font-semibold transition-all">
              TICKETS
            </p>
          </Link>
          <Link href="/news">
            <p className="text-white/60 text-medium hover:underline hover:underline-offset-8 hover:text-red-500 font-semibold transition-all">
              NEWS
            </p>
          </Link>
          <Link href="/contact">
            <p className="text-white/60 text-medium hover:underline hover:underline-offset-8 hover:text-red-500 font-semibold transition-all">
              CONTACT
            </p>
          </Link>
          <Link href="/profile">
            <p className="text-white/60 text-medium hover:underline hover:underline-offset-8 hover:text-red-500 font-semibold transition-all">
              PROFILE
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

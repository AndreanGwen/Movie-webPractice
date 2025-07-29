// File: CardItem.tsx
import { motion, useInView } from "framer-motion";
import { useContext, useRef } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { DarkMode } from "@/context/darkModeContext/darkModeContext";

export default function CardItem({ element }: { element: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const context = useContext(DarkMode);

  if (!context) {
    throw new Error("DarkMode context is not provided");
  }

  const { isDarkMode, setIsDarkMode } = context;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="lg:w-60 lg:h-80 p-2 rounded-xl flex flex-col gap-3 overflow-auto h-56 w-40 justify-between"
    >
      <div className="w-full flex justify-center">
        <Image
          src={element.Poster}
          alt="poster"
          className="object-cover rounded-xl"
          height={isMobile ? 150 : 20}
          width={isMobile ? 130 : 150}
        />
      </div>

      <div
        className={`flex-col ${
          isDarkMode ? "text-white" : "text-black"
        } items-start text-wrap`}
      >
        <p className="text-tiny uppercase font-bold">{element.Type}</p>
        <small className="text-default-500">{element.Year}</small>
        <h4 className="font-bold text-sm">{element.Title}</h4>
      </div>
    </motion.div>
  );
}

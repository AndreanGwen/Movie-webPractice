// File: CardItem.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function CardItem({ element }: { element: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="lg:w-60 lg:h-80 bg-black p-2 rounded-xl flex flex-col gap-3 overflow-auto h-56 w-40"
    >
      <div className="w-full flex justify-center">
        <Image
          src={element.Poster}
          alt="poster"
          className="object-cover"
          height={isMobile ? 150 : 230}
          width={isMobile ? 130 : 220}
        />
      </div>

      <div className="flex-col text-white items-start text-wrap">
        <p className="text-tiny uppercase font-bold">{element.Type}</p>
        <small className="text-default-500">{element.Year}</small>
        <h4 className="font-bold text-sm">{element.Title}</h4>
      </div>
    </motion.div>
  );
}

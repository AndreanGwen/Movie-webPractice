import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useInView } from "framer-motion";
import CardItem from "../CardItem";
import { useSearchMovies } from "@/libs/axios/apiSearch";
// import apiSearch from "@/libs/axios/apiSearch";

const CardPage_2 = () => {
  const movies = useSearchMovies();

  return (
    <div className="lg:pr-20 lg:pl-20 w-full h-fit pb-10 flex flex-wrap lg:gap-6 gap-4 justify-center lg:justify-between pr-2 pl-2">
      {movies?.map((element: any, index: number) => {
        return <CardItem key={index} element={element} />;
      })}
    </div>
  );
};

export default CardPage_2;

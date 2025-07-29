import apiSearch from "@/libs/axios/apiSearch";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useInView } from "framer-motion";
import CardItem from "../CardItem";

const CardPage_2 = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await apiSearch();
      setMovies(result);
    };
    fetchData();
  }, []);

  return (
    <div className="lg:pr-20 lg:pl-20 w-full h-fit pb-10 flex flex-wrap lg:gap-6 gap-4 justify-center lg:justify-between pr-2 pl-2">
      {movies?.map((element: any, index: number) => {
        return <CardItem key={index} element={element} />;
      })}
    </div>
  );
};

export default CardPage_2;

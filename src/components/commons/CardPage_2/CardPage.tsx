import apiSearch from "@/libs/axios/apiSearch";
import { Image } from "@heroui/react";
import { useEffect, useState } from "react";

const CardPage_2 = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await apiSearch();
      setMovies(result); // result = array dari OMDB API
    };
    fetchData();
  }, []);

  return (
    <div className="pr-20 pl-20 w-full h-fit pb-10 flex flex-wrap gap-6 justify-between">
      {movies?.map((element: any, index: number) => (
        <div
          key={index}
          className="w-60 h-80 bg-black p-2 rounded-xl flex flex-col gap-3 overflow-auto"
        >
          <div className="w-full flex justify-center">
            <Image
              src={element.Poster}
              alt="poster"
              className="object-cover"
              height={230}
              width={220}
            />
          </div>

          <div className="flex-col text-white items-start">
            <p className="text-tiny uppercase font-bold">{element.Type}</p>
            <small className="text-default-500">{element.Year}</small>
            <h4 className="font-bold text-sm">{element.Title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPage_2;

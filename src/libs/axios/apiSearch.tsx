import { useSearchValue } from "@/context/searchValueContext/searchValueContext";
import { useEffect, useState } from "react";
import axios from "axios";

export const useSearchMovies = () => {
  const { isValue } = useSearchValue();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_SEARCH = `https://www.omdbapi.com/?apikey=5060f33c&s=${
        isValue ? isValue : "naruto"
      }`;

      try {
        const response = await axios.get(API_SEARCH);
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setMovies([]);
      }
    };

    fetchData();
  }, [isValue]);

  return movies;
};

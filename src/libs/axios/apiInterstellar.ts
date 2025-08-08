import axios from "axios";
import { useEffect, useState } from "react";

export const useApiInterstellar = () => {
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const API_INTERSTELLAR =
      "https://www.omdbapi.com/?apikey=5060f33c&i=tt0988824";

    axios
      .get(API_INTERSTELLAR)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      });
  }, []);
  return movie;
};

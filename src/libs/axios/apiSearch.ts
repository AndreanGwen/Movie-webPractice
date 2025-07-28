import axios from "axios";

const apiSearch = async () => {
  const API_SEARCH = "https://www.omdbapi.com/?apikey=5060f33c&s=venom";
  try {
    const response = await axios.get(API_SEARCH);
    return response.data.Search; // pastikan ini array
  } catch (error) {
    console.error("Error fetching movie:", error);
    return []; // fallback jika error
  }
};

export default apiSearch;

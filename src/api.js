import axios from "axios";
import SearchBar from "./components/SearchBar";

const SearchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID JWkDJUZGn0V_O3_h8DL58VqZySL-ofxDu0o9XpcJIj0",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default SearchImages;

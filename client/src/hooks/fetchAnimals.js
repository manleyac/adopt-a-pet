import axios from "axios";

const API_URL = "http://localhost:8000/api";

const fetchAnimals = (animal, location, page) => {
  return axios.get(`${API_URL}/${animal}/${location}/${page}`);
};

export default fetchAnimals;

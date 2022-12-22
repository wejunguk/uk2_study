import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key: "40c152c942d94c30283dc24eb69ca569",
    language: "ko-KR",
  },
});

export default instance;

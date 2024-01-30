import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "cfd3ed0ffb7d1037e6e53c982173718f",
    language: "ko-KR"
  }
})

export default instance;
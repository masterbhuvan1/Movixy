import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
//const TMDB_TOKEN = 'dfa491ad384cc9f0e36e5a37c2d985c3';
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  accept: "application/json",
  Authorization: "Bearer " + TMDB_TOKEN,
};
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmE0OTFhZDM4NGNjOWYwZTM2ZTVhMzdjMmQ5ODVjMyIsInN1YiI6IjY0YmZhZmJiMDE3NTdmMDExY2E4YWI3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jU-3eQ6BF7SgsgaPuGtAC4r2euKHv87Yjl8Mfm2-9y0",
  },
};
//https://api.themoviedb.org/3/movie/upcoming?api_key=dfa491ad384cc9f0e36e5a37c2d985c3
//const api = `https://api.themoviedb.org/3/movie/${e}?api_key=dfa491ad384cc9f0e36e5a37c2d985c3`;
// export const fetchDataFromApi = async (url, params) => {
//   try {
//     const { data } = await axios.get(
//       BASE_URL + "/" + url + "?api_key=dfa491ad384cc9f0e36e5a37c2d985c3",
//       {
//         headers,
//         params,
//       }
//     );
//     return data;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// };
export const fetchDataFromApi = async (url, options) => {
  try {
    const response = await fetch(
      BASE_URL + url + `?api_key=dfa491ad384cc9f0e36e5a37c2d985c3`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err; // Rethrow the error to handle it outside this function
  }
};

export const fetchDataFromApiSearch = async (url, params) => {
  try {
    const { data } = await axios.get(
      BASE_URL + "/" + url + "api_key=dfa491ad384cc9f0e36e5a37c2d985c3",
      {
        headers,
        params,
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

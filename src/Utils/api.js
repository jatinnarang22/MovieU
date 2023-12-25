import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmI3ODFkMjZiMDY4YzdjNjI0YmViM2E2MTYwMmUzOSIsInN1YiI6IjY1ODA2N2NkMDA1MDhhMDY5YTE1ZDBiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8p5aGMgK7SML9bBi7lpp8FE-v_pN4pAZ6qGsxh4LLE";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

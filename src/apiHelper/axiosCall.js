import axios from "axios";

export const callApi = (search) =>
  axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      part: "snippet",
      q: search,
      type: "video",
      maxResults: 21,
      embedabble: "true",
      key: "", //Place your API key here
    },
  });

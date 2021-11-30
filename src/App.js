import { useState, useEffect, useRef } from "react";
import { callApi } from "./apiHelper/axiosCall";
import Header from "./components/Header";
import Display from "./components/Display";

const App = () => {
  const [videos, setVideos] = useState({
    items: [{ id: { videoId: "9E6b3swbnWg" } }],
  });

  const submitSearch = (search) =>
    callApi(search).then((response) => setVideos(response.data));

  const initialCall = useRef(true);
  useEffect(() => {
    if (initialCall.current) initialCall.current = false;
    else submitSearch("Chopin Nocturne no2");
  }, []);

  return (
    <div className="App">
      <Header searchHandler={submitSearch} />
      <Display videos={videos} />
    </div>
  );
};

export default App;

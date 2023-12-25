import React, { useState } from "react";
import Slider from "../../../components/Slider/Slider";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";

import useFetch from "../../../hooks/usefatch";

function popular() {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <div className="ContentWrapper">
        <span className="carouselTitle">Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </div>
      {/* slider */}
      <Slider data={data?.results} loading={loading} />
    </div>
  );
}

export default popular;

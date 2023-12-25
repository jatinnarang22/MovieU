import React, { useState } from "react";
import Slider from "../../../components/Slider/Slider";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";

import useFetch from "../../../hooks/usefatch";

function tranding() {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <div className="ContentWrapper">
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
      {/* slider */}
      <Slider data={data?.results} loading={loading} />
    </div>
  );
}

export default tranding;

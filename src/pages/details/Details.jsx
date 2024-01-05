import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import useFetch from "../../hooks/usefatch.jsx";
import DetailsBanner from "./detail_Banner/DetailBanner.jsx";
import Img from "../../components/lazyLoadImage/Img.jsx";
import { useSelector } from "react-redux";
import Cast from "./cast/Cast.jsx";
// import VideosSection from "./videosSection/VideosSection.jsx";
// import Similar from "./carousels/Similar";
// import Recommendation from "./carousels/Recommendation";

const Details = () => {
  const { url } = useSelector((state) => state.home);
  const { mediaType, id } = useParams();
  // const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);

  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  // console.log(data, "dataimages");

  return (
    <div>
      <DetailsBanner crew={credits?.crew} />

      <Cast data={credits?.cast} loading={creditsLoading} />
      {/* <VideosSection data={data} loading={loading} /> */}
      {/* <Similar mediaType={mediaType} id={id} /> */}
      {/* <Recommendation mediaType={mediaType} id={id} /> */}
    </div>
  );
};

export default Details;

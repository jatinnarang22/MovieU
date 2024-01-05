import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import { AiOutlineCaretUp } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import People from "../../../assets/People.png";

function Cast({ data, loading }) {
  const [casts, setcasts] = useState(7);
  const [showAll, setShowAll] = useState(false);
  const { url } = useSelector((state) => state.home);

  console.log(data, "cast");
  //   console.log(url.backdrop + `${data[0].profile_path}`);

  const showLessCasts = () => {
    setcasts(7);
    setShowAll(false);
  };
  const showAllCasts = () => {
    setcasts(data.length);
    setShowAll(true);
  };

  return (
    <div className="Casts">
      <div className="ContentWrapper">
        <p className="carouselTitle">Cast</p>
      </div>
      {!loading ? (
        <div className="castWrapper">
          {data.slice(0, casts)?.map((item, index) => {
            const posterUrl = item.profile_path
              ? url.backdrop + item.profile_path
              : People;
            return (
              <div className="cast" key={item.id}>
                <img className="castImg" src={posterUrl} alt={item.name} />
                {/* <p>{url.backdrop + `${item[index].profile_path}`}</p> */}
                <div className="castInfo">
                  <p className="castName">{item.name}</p>
                  <br />
                  <p className="castCharacter">{item.character}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="detailsBannerSkeleton">
          <div className="ContentWrapper">
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </div>
        </div>
      )}
      <div className="button">
        {showAll ? (
          <AiOutlineCaretUp onClick={showLessCasts} className="showAllButton" />
        ) : (
          <AiOutlineCaretDown
            onClick={showAllCasts}
            className="showAllButton"
          />
        )}
      </div>
    </div>
  );
}

export default Cast;

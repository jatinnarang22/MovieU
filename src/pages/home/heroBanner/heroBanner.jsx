import "./style.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useFetch from "../../../hooks/usefatch";
import Img from "../../../components/lazyLoadImage/img";

import { useSelector } from "react-redux";

function HeroBanner() {
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/popular");

  const [query, setQuery] = useState("");
  const [background, setbackground] = useState("");
  const navigate = useNavigate();

  const data1 = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
  console.log(data1);
  const [urldata, setUrldata] = useState(data1);
  console.log(urldata, "urldata");

  console.log(url, "jatin");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(url.backdrop, "bannerimg");
        const bg = url.backdrop + urldata;
        console.log(bg, "banner");
        setbackground(bg);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function immediately

    // Set up an interval to change urldata every 2000 milliseconds
    const intervalId = setInterval(() => {
      const newData =
        data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
      if (newData !== undefined) {
        setUrldata(newData);
      }
    }, 8000);

    // Clear the interval when the component is unmounted or when the 'url' changes
    return () => clearInterval(intervalId);
  }, [url, urldata, data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <div className="ContentWrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;

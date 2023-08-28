import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;

  return (
    <div
      className="movieCard mb-10 w-60 max-md:w-32 cursor-pointer"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlock relative w-full   bg-cover bg-center mb-6">
        <img
          className="posterImg w-full h-full rounded-lg object-cover object-center"
          src={posterUrl}
          alt={data.title || data.name}
        />
        {!fromSearch && (
          <div className="flex justify-between items-end p-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50">
            {/* {data == undefined ? (
              <div></div>
            ) : ( */}
            {/* <CircleRating rating={data?.vote_average.toFixed(1)} /> */}
            {/* )} */}

            <Genres
              data={data.genre_ids.slice(0, 2)}
              className="hidden md:flex"
            />
          </div>
        )}
      </div>
      <div className="textBlock flex flex-col justify-start">
        <span className="title text-xl text-white mb-1 line-clamp-1">
          {data.title || data.name}
        </span>
        <span className="date text-sm text-white opacity-50">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;

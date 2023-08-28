import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

export const Carousel = ({ data, loading, endPoint }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const SkeletonItem = () => {
    return (
      <div
        className="skeletonItem flex flex-col w-52 mr-12 animate-pulse flex-shrink-0 "
        style={{ height: 450 }}
      >
        <div
          className="posterBlock bg-gradient-to-r from-blue-800 to-blue-950   rounded-lg skeleton mb-3"
          style={{ height: 312 }}
        ></div>
        <div className="text-white flex flex-col">
          <span className="text-base h-7 mb-7 skeleton bg-gradient-to-r from-blue-800 to-blue-950 w-3/4"></span>
          <span className="text-sm h-7 opacity-50 bg-gradient-to-r from-blue-800 to-blue-950 skeleton w-2/4"></span>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-screen-xl  items-center overflow-hidden relative ">
      {!loading ? (
        <div className="overflow-x-auto no-scrollbar background-container bg-cover bg-center flex ">
          {data?.map((item, index) => {
            const posterUrl = item.poster_path
              ? url.poster + item.poster_path
              : PosterFallback;
            return (
              <div
                key={index}
                className={`flex-shrink-0 h-80 w-52  mr-12 no-scrollbar rounded-lg ${
                  // index % 5 == 0 ? "snap-center" :
                  ""
                } `}
                style={{ height: 450 }}
                onClick={() =>
                  navigate(`/${item.media_type || endPoint}/${item.id}`)
                }
              >
                <div className=" relative background-container bg-cover">
                  <img
                    src={posterUrl}
                    className=" hover:cursor-pointer rounded-md mb-4"
                  />

                  <div className="absolute bottom-0 left-0 right-8  ">
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                  </div>

                  <div className="absolute bottom-0 left-auto right-0  ">
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                </div>
                <div className="text-white flex flex-col">
                  <span className="text-base mb-3 leading-6 truncate-1 md:text-lg">
                    {item.title || item.name}
                  </span>
                  <span className="text-sm opacity-50">
                    {dayjs(item.release_date || item.first_air_date).format(
                      "MMM D, YYYY"
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className=" max-md:overflow-x-auto background-container bg-cover bg-center flex ">
          <SkeletonItem />
          <SkeletonItem />
          <SkeletonItem />
          <SkeletonItem />
          <SkeletonItem />
        </div>
      )}
    </div>
  );
};
{
}

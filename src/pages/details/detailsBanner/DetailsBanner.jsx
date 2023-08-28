import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import PosterFallback from "../../../assets/no-poster.png";
import { PlayButton } from "../PlayButton";

// import { PlayButton } from "../PlayButton";

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const mediatype = "movie";
  const { data, loading } = useFetch(`/${mediatype}/${id}`);

  const { url } = useSelector((state) => state.home);

  const _genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner  text-white ">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="background-container bg-cover mx-auto">
                <div className="backdrop-img opacity-25 absolute top-0 left-0 w-[100%] max-md:h-[100%] ">
                  <img
                    src={url.backdrop + data.backdrop_path}
                    className="object-cover w-full max-md:h-full   object-center  "
                    alt=""
                  />
                </div>

                <div
                  className="content bg-bl  relative w-[90%] mt-28 mb-56 max-md:mb-9 flex z-10 max-md:flex-col
                mx-auto px-4"
                  style={{ gap: 50 }}
                >
                  <div className="left flex-shrink-0  ">
                    {data.poster_path ? (
                      <img
                        className="posterImg w-full block max-w-[350px] rounded-lg"
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <img className="posterImg" src={PosterFallback} />
                    )}
                  </div>
                  <div className="right items-start text-start flex flex-col justify-start flex-grow w-full">
                    <div className="title text-3xl  ">
                      {`${data.name || data.title} (${dayjs(
                        data?.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div
                      className="subtitle text italic mb-4 "
                      style={{ opacity: 0.5 }}
                    >
                      {data.tagline}
                    </div>
                    <div className=" mb-8">
                      <Genres data={_genres} />
                    </div>

                    <div className="row relative items-center flex gap-3 mb-7">
                      <CircleRating rating={data?.vote_average.toFixed(1)} />

                      <div
                        className="playbtn flex items-center  "
                        onClick={() => {
                          setShow(true);
                          setVideoId(video.key);
                        }}
                      >
                        <PlayButton />
                      </div>
                      <div className="text items-center text-center">
                        Watch Trailer
                      </div>
                    </div>

                    <div className="overview mt-8 ">
                      <div className="heading items-start">Overview</div>
                    </div>
                    <div className="description items-start text-start mb-10 ">
                      {data.overview}
                    </div>
                    <div className="flex flex-col">
                      <div className="info flex gap-4 border-b-2 py-4">
                        {data.status && (
                          <div className="infoItem mr-2">
                            <span className="text bold font-bold gap-2">
                              Status:{" "}
                            </span>
                            <span className="text">{data.status}</span>
                          </div>
                        )}
                        {data.release_date && (
                          <div className="infoItem">
                            <span className="text bold font-bold gap-2">
                              Release Date:{" "}
                            </span>
                            <span className="text">
                              {dayjs(data.release_date).format("MMM D, YYYY")}
                            </span>
                          </div>
                        )}
                        {data.runtime && (
                          <div className="infoItem">
                            <span className="text bold font-bold gap-2">
                              Runtime:{" "}
                            </span>
                            <span className="text">
                              {toHoursAndMinutes(data.runtime)}
                            </span>
                          </div>
                        )}
                      </div>

                      {director?.length > 0 && (
                        <div className="info  border-b-2 py-4 ">
                          <span className="text bold font-bold">
                            Director:{" "}
                          </span>
                          <span className="text">
                            {director?.map((d, i) => (
                              <span key={i}>
                                {d.name}
                                {director.length - 1 !== i && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      )}

                      {writer?.length > 0 && (
                        <div className="info  border-b-2 py-4">
                          <span className="text bold">Writer: </span>
                          <span className="text">
                            {writer?.map((d, i) => (
                              <span key={i}>
                                {d.name}
                                {writer.length - 1 !== i && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      )}

                      {data?.created_by?.length > 0 && (
                        <div className="info">
                          <span className="text bold">Creator: </span>
                          <span className="text">
                            {data?.created_by?.map((d, i) => (
                              <span key={i}>
                                {d.name}
                                {data?.created_by.length - 1 !== i && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
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
      )}
    </div>
  );
};

export default DetailsBanner;

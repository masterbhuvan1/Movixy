import React, { useState } from "react";
import { PlayButton } from "../PlayButton";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  if (data == null || data.results.length === 0) {
    return null;
  }

  return (
    <div className="videosSection relative   max-w-screen-xl items-center mx-auto mb-9">
      <div className="sectionHeading  text-start  text-white font-light   text-2xl mb-[25px]">
        Official Videos
      </div>
      {!loading ? (
        <div
          className="videos gap-[20px] 
        flex overflow-x-auto overflow-hidden no-scrollbar content-center"
        >
          {data?.results?.map((video) => (
            <div
              key={video.id}
              className="videoItem w-[25%]  flex-shrink-0 "
              onClick={() => {
                setVideoId(video.key);
                setShow(true);
              }}
            >
              <div className="videoThumbnail relative background-container bg-cover bg-center   ">
                <img
                  src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  className=" "
                />
                <div className=" flex absolute top-16 left-32    justify-center">
                  <PlayButton className="" />
                </div>
              </div>

              <div className="videoTitle text-white mt-5">{video.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="videoSkeleton">
          {loadingSkeleton()}
          {loadingSkeleton()}
          {loadingSkeleton()}
          {loadingSkeleton()}
        </div>
      )}
    </div>
  );
};

export default VideosSection;

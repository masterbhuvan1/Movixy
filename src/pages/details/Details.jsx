import React from "react";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideoSection";
import Similar from "./Similar";
import Recommendation from "./Recommendations";
export const Details = () => {
  const { mediaType, id } = useParams();
  // const mediatype = "movie";
  console.log(mediaType, id);
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  // if (mediaType !== undefined) {
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  //}
  return (
    <div className="  ">
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

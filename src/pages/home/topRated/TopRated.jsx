import React, { useState } from "react";
import { SwitchTabs } from "../../../components/switch-tabs/SwitchTabs";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { Carousel } from "../../../components/carousel/Carousel";
export const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  //console.log(data);
  const onTabChange = (tab) => {
    console.log("nikal");
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="content relative mb-7  items-center   ">
      <div className=" true items-center flex max-w-screen-xl justify-between mb-2   mx-auto mt-0">
        <div className=" text-white text-2xl">Top Rated</div>
        <SwitchTabs data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
      </div>
      <div
        className="flex justify-center max-w-screen-xl items-center px-2 mx-auto  "
        style={{ height: 500 }}
      >
        <Carousel data={data?.results} loading={loading} endPoint={endpoint} />
      </div>
    </div>
  );
};

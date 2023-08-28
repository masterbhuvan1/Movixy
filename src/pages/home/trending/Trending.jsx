import React, { useState } from "react";
import { SwitchTabs } from "../../../components/switch-tabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import { Carousel } from "../../../components/carousel/Carousel";
export const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="content relative mb-7  items-center   ">
      <div className=" true items-center flex max-w-screen-xl justify-between mb-2   mx-auto mt-0">
        <div className=" text-white text-2xl">Trending</div>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
      <div
        className="flex justify-center max-w-screen-xl items-center px-2 mx-auto  "
        style={{ height: 500 }}
      >
        <Carousel data={data?.results} loading={loading} />
      </div>
    </div>
  );
};

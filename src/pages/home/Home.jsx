import React from "react";

import { HeroBanner } from "./heroBanner/HeroBanner";

import { Trending } from "./trending/Trending";
import { Popular } from "./popular/Popular";
import { TopRated } from "./topRated/TopRated";

export const Home = () => {
  return (
    <div className="flex bg-slate-900 flex-col">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

import React from "react";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="flex  max-md:flex-col gap-2">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div
            key={g}
            className="bg-pink-500 px-1 py-1 text-white rounded-md text-xs whitespace-nowrap"
          >
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;

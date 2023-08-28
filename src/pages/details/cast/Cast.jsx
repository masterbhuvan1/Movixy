import React from "react";
import { useSelector } from "react-redux";

import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem animate-pulse ">
        <div className="circle skeleton bg-gradient-to-r from-blue-800 to-blue-950 rounded-full mb-[25px] h-[175px] w-[175px] max-md:w-[125px] max-md:h-[125px]"></div>
        <div className="row skeleton bg-gradient-to-r mb-3 from-blue-800 to-blue-950 h-[24px]"></div>
        <div className="row2 skeleton bg-gradient-to-r from-blue-800 to-blue-950 h-[24px]"></div>
      </div>
    );
  };
  return (
    <div className=" max-w-screen-xl items-center mx-20 max-md:mx-auto mb-4  ">
      <div className="castSection relative ">
        <div className="sectionHeading  text-start text-white font-light   text-2xl mb-[25px]">
          Top Cast
        </div>
        {!loading ? (
          <div className="listItems overflow-y-hidden  gap-[20px] flex overflow-x-auto no-scrollbar ">
            {data?.map((item) => {
              let imgUrl = item.profile_path
                ? url.profile + item.profile_path
                : avatar;
              return (
                <div
                  key={item.id}
                  className="listItem  flex-shrink-0 "
                  // style={{ width: "20%" }}
                >
                  <div className=" flex flex-col items-center h-96">
                    <div className="profileImg   ">
                      <img
                        src={imgUrl}
                        className="rounded-full mb-[25px] h-[185px] w-[165px] max-md:w-[125px] max-md:h-[125px]"
                      />
                    </div>
                    <div className="name text-white  h-[24px] font-bold">
                      {item.name}
                    </div>
                    <div
                      className="character text-white h-[24px] opacity-50
                      max-md:w-24 w-36"
                      // style={{ width: "20%" }}
                    >
                      {item.character}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton gap-[20px] flex ">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cast;

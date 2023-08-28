import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromApiSearch } from "../../utils/api";
import MovieCard from "../../components/movieCard/MovieCard";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApiSearch(`search/multi?query=${query}&`).then((res) => {
      setData(res);
      console.log(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <div className="w-screen max-md:px-6">
      <div className=" py-32 mx-auto max-w-screen-xl ">
        {loading && <Spinner initial={true} />}
        {!loading && (
          <div className="">
            {data?.results?.length > 0 ? (
              <>
                <div className="  justify-start flex font-medium text-2xl  max-md:text-xl text-white mb-6">{`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}</div>
                <InfiniteScroll
                  className="con5ent flex flex-wrap gap-3"
                  dataLength={data?.results?.length || []}
                  next={fetchNextPageData}
                  hasMore={pageNum <= data?.total_pages}
                >
                  {data?.results.map((item, index) => {
                    if (item.media_type === "person") return null;
                    return (
                      <MovieCard key={index} data={item} fromSearch={true} />
                    );
                  })}
                </InfiniteScroll>
              </>
            ) : (
              <div>Sorry, Results not found!</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;

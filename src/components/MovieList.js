import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import ShimmerList from "./ShimmerList";
import HorizontalScroller from "./HorizontalScroller";

const MovieList = ({ movieList, Title }) => {
  if (!movieList) return <ShimmerList />;

  return (
    <div className="mb-8">
      <div className="bg-transparent text-white font-b text-lg md:text-2xl mb-0 md:w-72 px-2 md:pl-7 rounded-r-lg font-semibold">
        {Title}
      </div>

      <HorizontalScroller gap={15}>
        {/* small left spacer so first card sits ~10px from screen edge */}
        <div
          aria-hidden="true"
          className="flex-shrink-0"
          style={{ width: 10 }}
        />
        {movieList.map((e) => (
          <div key={e.id} className="flex-shrink-0">
            <Link to={"/movie/" + e.id}>
              <MovieCard movie={e} />
            </Link>
          </div>
        ))}
      </HorizontalScroller>
    </div>
  );
};

export default MovieList;

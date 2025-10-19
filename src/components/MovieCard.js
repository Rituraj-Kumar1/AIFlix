import React from "react";
import { POSTER_IMG } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { poster_path } = movie;
  if (!poster_path) return null;
  return (
    <div style={{ width: 160 }} className="flex-shrink-0 cursor-pointer mt-2">
      {" "}
      {/* reduced top margin */}
      <div className="hover:-translate-y-1 hover:scale-125 transition">
        <img
          className="w-full h-auto object-contain rounded"
          src={POSTER_IMG + poster_path}
          alt=""
        />
      </div>
    </div>
  );
};

export default MovieCard;

"use client";

import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const FavoriteBtn = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <button
      onClick={toggleFavorite}
      className="bg-gray-200/60 p-1.5 rounded-full"
      aria-label="Toggle favorite"
    >
      {isFavorite ? (
        <FaStar size={24} className="text-white" />
      ) : (
        <FaRegStar size={24} className="text-white" />
      )}
    </button>
  );
};

export default FavoriteBtn;

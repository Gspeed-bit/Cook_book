import React from "react";

export const Categories = ({ categorize, filterItems }) => {
  return (
    <div className="fliter-btn">
      {categorize.map((category, index) => {
        return (
          <button
            className="btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

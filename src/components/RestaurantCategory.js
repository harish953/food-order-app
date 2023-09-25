import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const items = data?.itemCards;
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="">
      <div className="  shadow-md w-6/12 bg-slate-100 mx-auto my-3 p-3">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-md font-sans">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={items} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

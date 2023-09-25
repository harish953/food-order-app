import React from "react";
import { useDispatch } from "react-redux";
import { ITEM_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  //   console.log(items);
  //   const { name, price, imageId, id } = items?.card?.info;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      <ul>
        {items.map((item) => {
          //   console.log(
          //     item.card.info.id,
          //     item.card.info.name,
          //     item.card.info.price,
          //     item.card.info.imageId
          //   );
          return (
            <div
              key={item.card.info.id}
              className="m-2 p-2 border-gray-300 flex justify-between border-b-2"
            >
              <div className="text-gray-600 w-80">
                <h6 className="text-left text-gray-800">
                  {item.card.info.name}
                </h6>
                <p className="text-left text-sm mb-1">
                  ₹
                  {item.card.info.price
                    ? (item.card.info.price / 100).toFixed(0)
                    : (item.card.info.defaultPrice / 100).toFixed(0)}
                </p>
                <p className="text-left text-xs py-2">
                  {item.card.info.description}
                </p>
              </div>
              <div className="w-3/12 p-4 ">
                <span className="relative">
                  <button
                    className=" w-[50px] bottom-16 bg-white text-green-500 rounded-md"
                    onClick={() => {
                      handleAddItem(item);
                    }}
                  >
                    Add
                  </button>
                </span>
                <img
                  src={ITEM_URL + item.card.info.imageId}
                  alt="item-image"
                  className=" w-50"
                />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;

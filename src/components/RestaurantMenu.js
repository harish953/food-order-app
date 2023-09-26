import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);
  if (resInfo === null || resInfo === undefined) {
    return <Shimmer />;
  }

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(
  //   categories
  //   // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  return (
    <div className=" border-solid border-black  text-center">
      <span className="font-bold text-2xl  "> {name}</span>
      <p>{cuisines.join(", ")}</p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

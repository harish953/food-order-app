import { RES_IMAGE } from "../utils/constants";
import { FaStar } from "react-icons/fa"; // Import the star icon from react-icons/fa

const RestaurantCard = (props) => {
  const { resObj } = props;
  //   console.log(resObj.resImage);
  const { cloudinaryImageId, cuisines, avgRating, costForTwo, name } =
    resObj?.info;
  return (
    <div className="m-4 p-4 w-[250px] bg-white-100 hover:bg-gray-200 hover:scale-95 transform transition-transform rounded-xl">
      <img
        className="rounded-xl h-[175px] w-[250px] m-0 "
        src={RES_IMAGE + cloudinaryImageId}
        alt="Restaurant"
      />
      <div className="res-details">
        <h3 className="py-2 text-lg font-sans font-bold">{name}</h3>
        <h4 className="text-slate-600">{cuisines.join(", ")}</h4>
        <h4 className="text-slate-600">{costForTwo}</h4>
        <div className="flex">
          <FaStar color="green" size={16}></FaStar>
          <span className="text-slate-600">{avgRating}</span>
        </div>
      </div>
    </div>
  );
};

export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        <label className="absolute bg-black text-white ">promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;

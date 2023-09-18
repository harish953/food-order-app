import starIcon from "../assets/star-solid.svg";
import { RES_IMAGE } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resObj } = props;
  //   console.log(resObj.resImage);
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={RES_IMAGE + resObj?.info?.cloudinaryImageId}
        alt="Restaurant"
      />
      <div className="res-details">
        <h4 className="res-name">{resObj?.info?.name}</h4>
        <h6 className="res-cuisine">{resObj?.info?.cuisines.join(", ")}</h6>
        <div className="res-rating">
          <img src={starIcon} alt="Star Icon" className="star-icon" />
          <span className="rating-text">{resObj?.info?.avgRating}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

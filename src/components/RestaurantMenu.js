import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);
  if (resInfo === null || resInfo === undefined) {
    return <Shimmer />;
  }

  const { name, cuisines } = resInfo.cards[0].card.card.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <div className="recommended-card">
        <h3>Recommended</h3>
        <ul className="list-unordered">
          {itemCards.map((res) => (
            <li key={res.card.info.id}>
              {res.card.info.name} -
              {res.card.info.price / 100 || res.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

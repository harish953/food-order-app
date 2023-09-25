import React, { useState, useEffect } from "react";
import RestaurantCard, { withPromoted } from "./RestaurantCard";
import RES_LIST from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //state variable
  const [listOfRestaurants, setListOfRestaurant] = useState(RES_LIST);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromoted(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6214688&lng=77.39416539999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestaurant(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body scroll-smooth">
      <div className="filter-btn flex">
        <div className="search m-2 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-2xl px-4 py-2"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="px-4 py-2 bg-gray-100 mx-2 rounded-2xl"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
          <button
            className="bg-green-100 px-4 py-2 rounded-2xl"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            top rated restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((res) => (
          <Link to={`/restaurants/${res.info.id}`}>
            {res.info.promoted === true ? (
              <RestaurantCardPromoted key={res.info.id} resObj={res} />
            ) : (
              <RestaurantCard key={res.info.id} resObj={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

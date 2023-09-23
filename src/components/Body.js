import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import RES_LIST from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //state variable
  const [listOfRestaurants, setListOfRestaurant] = useState(RES_LIST);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6214688&lng=77.39416539999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // console.log(
    //   json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants[0]?.info.id
    // );
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
    <div className="body">
      <div className="filter-btn">
        <div className="search">
          <input
            type="text"
            className="input-search"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="search-btn"
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
            className="btn"
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
      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <Link to={`/restaurants/${res.info.id}`}>
            <RestaurantCard key={res.info.id} resObj={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

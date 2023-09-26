import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Sign In");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between  bg-gradient-to-r from-slate-100 to-orange-500 shadow-md ">
      <div className="logo-container">
        <img
          className="w-24 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutTvjP5Nx7u5vk-IZlmBsiIZIn4ZgTli70lW3i_KRw2FriVJ0YxtVctxFi56AgnqZgrk&usqp=CAU"
          alt="app logo"
        ></img>
      </div>
      <div className="nav-items flex item-center ">
        <ul className="flex p-4 m-6">
          <li className="px-4">{onlineStatus ? "Online ✅" : "Offline 🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold ">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>

          <li className="px-4">
            <button
              className="login-btn"
              onClick={() => {
                setBtnName("Logout");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

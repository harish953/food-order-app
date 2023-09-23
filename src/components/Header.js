import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/shopping-cart.png";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Sign In");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutTvjP5Nx7u5vk-IZlmBsiIZIn4ZgTli70lW3i_KRw2FriVJ0YxtVctxFi56AgnqZgrk&usqp=CAU"
          alt="app logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "Online ✅" : "Offline 🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <span>
              <img className="cart-icon" src={cartIcon} alt="cart icon"></img>
            </span>
          </li>
          <li>
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

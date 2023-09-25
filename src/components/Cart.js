import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  //   const total = cartItems.reduce(0, curr);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold font-sans">Cart</h1>
      <div className="w-6/12 m-auto ">
        <ItemList items={cartItems} />
      </div>
      <button
        onClick={handleClearCart}
        className="border-solid border-black-500 bg-black p-2 rounded-lg text-slate-50 shadow-md"
      >
        clear
      </button>
      <h1 className="text-2xl font-bold font-sans">Total Rs 1000</h1>
    </div>
  );
};

export default Cart;

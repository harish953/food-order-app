import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Contact Us </h1>
      <input
        type="text"
        placeholder="Name"
        className="border-black w-1/4"
      ></input>
      <input
        type="text"
        placeholder="Message"
        className="border-black w-1/4"
      ></input>
      <button className="border-black bg-black shadow-lg p-2 m-2 text-white">
        Submit
      </button>
    </div>
  );
};

export default Contact;

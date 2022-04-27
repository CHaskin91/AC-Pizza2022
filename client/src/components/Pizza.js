import React from "react";

export default function Pizza({ pizza }) {
  return (
    <div>
      <h1>{pizza.name}</h1>
      <img
        src={pizza.image}
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      />

      <div className="flex-container">
        <div className="w-100">
          <p>Size</p>
          <select>
            {pizza.size.map((size) => {
              return <option value={size}>{size}</option>;
            })}
          </select>
        </div>

        <div className="w-100">
          <p>Quantity</p>
          <select>
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

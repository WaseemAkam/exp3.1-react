import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, stock }) {
  return (
    <div className="card">
      <div className="image-placeholder"></div>

      <h2>{name}</h2>
      <p className="price">${price}</p>

      <span className={stock ? "stock in" : "stock out"}>
        {stock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default ProductCard;
import React from "react";
import "../styles/ProductCard.css";

function ProductCard() {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          className="card-image"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </div>
      <div className="card-details">
        <h5 className="card-title">shirt</h5>
        <p className="card-price">$30</p>
        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing 
        </p>

        <button className="btn add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

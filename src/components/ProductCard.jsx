import React from "react";
import "../styles/ProductCard.css";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import Button from "@mui/material/Button";

function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={product.image} alt={product.title} />
      </div>
      <div className="card-details">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-price">${product.price}</p>
        <p className="card-description">{product.description}</p>
        <Button variant="contained">Add To Cart</Button>
        <br />
        <br />
        <div>
          <Button variant="contained">
            <RemoveCircleOutlineOutlinedIcon />
          </Button>
          <span className=" ml-3">1</span>
          <Button variant="contained">
            <AddCircleOutlineOutlinedIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

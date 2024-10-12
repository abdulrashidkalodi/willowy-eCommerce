import React, { useState } from "react";
import "../styles/ProductCard.css";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addToCart, updateQty } from "../Redux/slice/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ product, qty }));
    setInCart(true);
  };

  const addQty = () => {
    setQty((prevQty) => {
      const newQty = prevQty + 1; 
      dispatch(updateQty({ productId: product.id, qty: newQty }));
      return newQty; 
    });
  };

  const decreaseQty = () => {
    setQty((prevQty) => {
      const newQty = Math.max(prevQty - 1);
      dispatch(updateQty({ productId: product.id, qty: newQty }));
      if (newQty === 0) {
        setInCart(false);
      }
      return newQty;
    });
  };
  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={product.image} alt={product.title} />
      </div>
      <div className="card-details">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-price">${product.price}</p>
        <p className="card-description">{product.description}</p>
        {!inCart ? (
          <Button variant="contained" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        ) : (
          <div>
            <Button variant="contained" onClick={decreaseQty}>
              <RemoveCircleOutlineOutlinedIcon />
            </Button>
            <span className="ml-3">{qty}</span>
            <Button variant="contained" onClick={addQty}>
              <AddCircleOutlineOutlinedIcon />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;

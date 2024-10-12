import React, { useState } from "react";
import "../styles/ProductCard.css";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQty } from "../Redux/slice/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.product.id === product.id);
  const [inCart, setInCart] = useState(false);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ product, qty }));
    setInCart(true);
  };

  const addQty = () => {
    setQty((prevQty) => {
      const newQty = prevQty + 1;
      dispatch(updateQty({ productId: product.id, qty: 1 }));
      return newQty;
    });
  };

  const decreaseQty = () => {
    setQty((prevQty) => {
      const newQty = Math.max(prevQty - 1, 0);
      if (newQty === 0) {
        dispatch(removeFromCart(product.id));
        setInCart(false);
      } else {
        dispatch(updateQty({ productId: product.id, qty: -1 }));
      }
      return newQty;
    });
  };
    const truncateText = (text, length) => {
      if (text.length > length) {
        return text.substring(0, length) + "...";
      }
      return text;
    };
  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={product.image} alt={product.title} />
      </div>
      <div className="card-details">
        <h5 className="card-title">{truncateText(product.title, 20)}</h5>
        <p className="card-price">${product.price}</p>
        <p className="card-description">{truncateText(product.description, 100)}</p>
        {!inCart ? (
          <Button variant="contained" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        ) : (
          <div>
            <Button variant="contained" onClick={decreaseQty}>
              <RemoveCircleOutlineOutlinedIcon />
            </Button>
            <span className="ml-3">{cartItem ? cartItem.qty : 1}</span>
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

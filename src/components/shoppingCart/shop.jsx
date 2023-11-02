import React, { useEffect, useState } from "react";
import "./styles.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
const ShoppingCart = ({
  name,
  image,
  price,
  discount,
  count,
  handleCartItems,
  id,
  handleCountChange,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [counter, setCounter] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const total = price * quantity;
  const discountedTotal = total * (1 - discount / 100);
  const percentage = (discount / total) * 100;
  useEffect(() => {
    setCounter(count);
  }, [count]);
  useEffect(() => {
    handleCountChange(activeIndex, counter);
  }, [counter]);
  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="root-container">
        <div className="product-info">
          <span className="product-name">{name}</span>
          <div className="inner-container-price">
            <span
              className={discount == 0 ? "product-name" : "product-name-clone"}
            >
              ${total}
            </span>
          </div>
        </div>
        <div className="before-counter-block">
          <div className="main-counter-block">
            <div className="counter-blocks">
              <div className="icon-holders">
                <RemoveIcon
                  onClick={() => handleCartItems(id, "sub")}
                  className="subtract-icon"
                  fontSize="10px"
                />
              </div>

              <input
                className="inner-counter-eles"
                value={counter}
                onChange={(e) => {
                  if (e.target.value > 0) {
                    if (e.target.value <= 99) {
                      setCounter(e.target.value);
                    }
                  }
                }}
                inputMode="numeric"
                onFocus={() => setActiveIndex(id)}
              />
              <div className="icon-holders2">
                <AddIcon
                  onClick={() => handleCartItems(id, "add")}
                  fontSize="10px"
                />
              </div>
            </div>
            <img
              src="/Vector.svg"
              className="delete-image"
              onClick={() => handleCartItems(id)}
            />
          </div>
          {discount != 0 && (
            <div className="discount-price">
              <span className="product-name">${discount}</span>
              <div className="gradient-box">
                <span className="save-per">Save {percentage}%</span>
              </div>
            </div>
          )}
        </div>
        <div>
          {id == 4 && <span className="save-per-later">Order for later</span>}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  const cartSatus = inCart ? "in-cart" : ""

  const buttonText = inCart ? "Remove From Cart" : "Add to Cart"

  const handleClick = () => {
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={cartSatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;

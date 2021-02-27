import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  console.log(props);
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-detail">
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>

        <p>
          <small>Only {stock} left in stock - Order soon</small>
        </p>
        <button
          className="product-btn"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <p style={{ marginLeft: "5px", display: "inline" }}>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Product;

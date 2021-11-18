import * as React from 'react';
import { useParams } from "react-router-dom";

export function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products[id];
  return (
    <div className="product-div-select">
      <h1 className="product-title"> {product.title} </h1>
      <img width="530" height="330" src={product.picture} alt={product.title}/>
      <h3 className="product-price"> Price: ₹ {product.price} </h3>
      <p> {product.description} </p>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { useStateContext } from '../context/StateContext';

const Product = ({ product: {image, name, slug, price}}) => {
  const { initQty } = useStateContext();
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
            <img 
            className="product-image"
            src={urlFor(image && image[0])} 
            width={250} 
            height={250} 
            alt="product"
            onClick={initQty} />
            <p className="product-name">{name}</p>
            <p className="product-price">{price}€</p>
        </div>
      </Link>
    </div>
  )
};

export default Product;

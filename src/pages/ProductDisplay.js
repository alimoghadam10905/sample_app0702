import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../ProductData";
const ProductDisplay = () => {
  const { id } = useParams();

  return (
    <>
      <div className="listOfProducts">
        <div className="productDisplay">
          <h1>{productData[id - 1].price}</h1>
          <img src={productData[id - 1].original} />
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;

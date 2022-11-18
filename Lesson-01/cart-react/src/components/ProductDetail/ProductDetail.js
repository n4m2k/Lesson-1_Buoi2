import React from "react";

const ProductDetail = (props) => {
  const { selectedProduct } = props;
  console.log(selectedProduct);
  return (
    <div>
      <div>
        <p>{selectedProduct?.name}</p>
        <img src={selectedProduct?.img} alt="" />
      </div>
      <div>
        <p>Price: {selectedProduct?.price}</p>
        <p>Screen: {selectedProduct?.info.screen}</p>
        <p>Back Cam: {selectedProduct?.info.backCamera}</p>
        <p>Front Cam: {selectedProduct?.info.frontCamera}</p>
        <p>OS: {selectedProduct?.info.os}</p>
        <p>Ram: {selectedProduct?.ram}</p>
        <p>Rom: {selectedProduct?.rom}</p>
      </div>
    </div>
  );
};

export default ProductDetail;

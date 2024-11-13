import React from "react";

import SingleProductItem from "./SingleProductItem";

const ProductsComponent = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="flex justify-center gap-4">
      {products.length > 0 ? (
        products.map((product: ProductType) => {
          return <SingleProductItem key={product.id} product={product} />;
        })
      ) : (
        <div>Our Store will publish new products very soon!</div>
      )}
    </div>
  );
};

export default ProductsComponent;

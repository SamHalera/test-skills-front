import { getSingleProduct } from "@/actions/products";
import SingleProductComponent from "@/components/SingleProductComponent";
import React from "react";

const pageSingleProduct = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = await getSingleProduct(id);
  console.log(product);
  return (
    <div className="flex items-center justify-center">
      <SingleProductComponent product={product} />
    </div>
  );
};

export default pageSingleProduct;

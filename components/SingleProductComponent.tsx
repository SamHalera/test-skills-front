import { getStrapiBaseURL } from "@/lib/utils";
import Image from "next/image";

import React from "react";

const SingleProductComponent = ({ product }: { product: ProductType }) => {
  const { name, description, image, price } = product.attributes;
  return (
    <div className="h-screen flex flex-col items-center gap-4 p-10 ">
      <div className="w-[700px]">
        <Image
          src={`${getStrapiBaseURL()}${image.data.attributes.url}`}
          width={image.data.attributes.width}
          height={image.data.attributes.height}
          alt={image.data.attributes.alternativeText}
        />
      </div>

      <h2 className="text-indigo-600 font-semibold text-xl">{name}</h2>
      {/* <p>{description.substring(0, 100)}...</p> */}
      <div
        className="w-[700px]"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <span className="text-indigo-400 font-bold">{price?.toFixed(2)}€</span>
    </div>
  );
};

export default SingleProductComponent;

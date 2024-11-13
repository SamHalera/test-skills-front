import { getStrapiBaseURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProductItem = ({ product }: { product: ProductType }) => {
  const { name, description, image } = product.attributes;
  return (
    <Link
      href={`/products/${product.id}`}
      className="w-[400px] flex flex-col items-center gap-4 bg-slate-100 shadow-sm p-10 rounded-md hover:bg-slate-200 duration-500"
    >
      <div className="">
        <Image
          src={`${getStrapiBaseURL()}${
            image.data.attributes.formats.thumbnail.url
          }`}
          width={image.data.attributes.formats.thumbnail.width}
          height={image.data.attributes.formats.thumbnail.height}
          alt={image.data.attributes.alternativeText}
        />
      </div>
      <h2 className="text-indigo-600 font-semibold text-xl">{name}</h2>
      {/* <p>{description.substring(0, 100)}...</p> */}
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: description.substring(0, 100) }}
      />
    </Link>
  );
};

export default SingleProductItem;

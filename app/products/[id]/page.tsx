import { getSingleProduct } from "@/actions/products";
import SingleProductComponent from "@/components/SingleProductComponent";

import { Metadata } from "next";
import { title } from "process";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const product = await getSingleProduct(id);
  const { seo, image } = product.attributes;
  const metaTitle = seo.metaTitle + " | FUTURE STORE";
  const metaDescription = seo.metaDescription + " | FUTURE STORE";

  const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${process.env.NEXT_PUBLIC_FRONT}/products/${id}`,
      images: [
        {
          url: `${process.env.STRAPI_BASE_URL}${image.data.attributes.formats.thumbnail.url}`,
          width: image.data.attributes.formats.thumbnail.width,
          height: image.data.attributes.formats.thumbnail.height,
        },
      ],
    },
  };

  return metadata;
}
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

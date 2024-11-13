import { getAllProducts } from "@/actions/products";
import ProductsComponent from "@/components/ProductsComponent";
import ProductsPageContent from "@/components/ProductsPageContent";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Future Store";
  const description = "The new store for every generation";

  const metadata: Metadata = {
    title,
    description,
  };
  return metadata;
}
const ProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <h1 className="text-3xl text-indigo-600 font-semibold">OUR PRODUCTS</h1>

      <ProductsPageContent>
        <ProductsComponent products={products} />
      </ProductsPageContent>
    </div>
  );
};

export default ProductsPage;

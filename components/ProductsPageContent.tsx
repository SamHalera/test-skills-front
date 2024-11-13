"use client";
import React, { useEffect } from "react";
import { dataLayerPageView } from "@/dataLayer/dataLayaerManager";

const ProductsPageContent = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    dataLayerPageView("Produits", "/products");
  }, []);
  return children;
};

export default ProductsPageContent;

"use client";
import {
  dataLayerPageView,
  dataLayerProductView,
} from "@/dataLayer/dataLayaerManager";
import React, { useEffect } from "react";

const ProductDetailsPageContent = ({
  children,
  id,
  productName,
  productPrice,
}: {
  children: React.ReactNode;
  id: string;
  productName: string;
  productPrice: number;
}) => {
  useEffect(() => {
    dataLayerPageView("Détail Produit", `/products/${id}`);
    dataLayerProductView(id, productName, productPrice);
  }, []);
  return children;
};

export default ProductDetailsPageContent;

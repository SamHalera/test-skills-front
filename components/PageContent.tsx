"use client";
import { dataLayerPageView } from "@/dataLayer/dataLayaerManager";
import Link from "next/link";
import React, { useEffect } from "react";

const PageContent = () => {
  useEffect(() => {
    dataLayerPageView("Accueil", "/");
  }, []);
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl text-indigo-600 font-semibold">
        Welcome to the new Products Store!
      </h1>
      <Link
        className="bg-indigo-600 p-3 text-white duration-500 border border-indigo-600 hover:bg-transparent hover:text-indigo-600"
        href={"/products"}
      >
        see our products
      </Link>
    </div>
  );
};

export default PageContent;

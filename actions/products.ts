import { getStrapiBaseURL } from "@/lib/utils";
import qs from "qs";
export const getAllProducts = async () => {
  try {
    const query = qs.stringify({
      populate: "*",
    });
    const baseUrl = getStrapiBaseURL();
    const path = "/api/products";
    const urlForFetch = new URL(path, baseUrl);
    urlForFetch.search = query;
    const response = await fetch(urlForFetch);
    const { data } = await response.json();
    console.log("data==>", data);
    return data;
  } catch (error) {
    console.error("error getting products==>", error);
    return {
      error: "Oups something went wrong. Try again.",
    };
  }
};
export const getSingleProduct = async (id: string) => {
  try {
    const query = qs.stringify({
      populate: "*",
    });
    const baseUrl = getStrapiBaseURL();
    const path = `/api/products/${id}`;
    const urlForFetch = new URL(path, baseUrl);
    urlForFetch.search = query;
    const response = await fetch(urlForFetch);
    const { data } = await response.json();
    console.log("data==>", data);
    return data;
  } catch (error) {
    console.error("error getting product==>", error);
    return {
      error: "Oups something went wrong. Try again.",
    };
  }
};

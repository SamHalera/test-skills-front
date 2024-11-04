import { getStrapiBaseURL } from "@/lib/utils";
import qs from "qs";

export async function getGTMIDFromStrapi() {
  try {
    // const query = qs.stringify({
    //   populate: "*",
    // });
    const baseUrl = getStrapiBaseURL();
    const path = "/api/global-gtm";
    const urlForFetch = new URL(path, baseUrl);
    // urlForFetch.search = query;
    const response = await fetch(urlForFetch);
    const { data } = await response.json();
    console.log(data.attributes.GTM_ID);
    return data.attributes.GTM_ID;
  } catch (error) {
    console.error("error getting gtm==>", error);
    return {
      error: "Oups something went wrong. Try again.",
    };
  }
}

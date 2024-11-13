export const dataLayerPageView = (page_name: string, page_path: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "page_view",
    page_name,
    page_path,
  });
};

export const dataLayerProductView = (
  product_id: string,
  product_name: string,
  product_price: number
) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "product_view",
    product_id,
    product_name,
    product_price,
  });
};

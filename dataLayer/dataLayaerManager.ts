export const dataLayerPageView = (page_name: string, page_path: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "page_view",
    page_name,
    page_path,
  });
};

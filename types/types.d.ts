type ProductType = {
  id: number;
  attributes: {
    name: string;
    description: string;
    price: number;
    image: Media;
    seo: [Object];
    gtm: [Object];
  };
};

type SeoType = {
  id: number;
  metaTitle: string;
  metaDescription: string;
};
type Media = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: any;
      caption: any;
      width: number;
      height: number;
      formats: Formats;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: any;
      provider: string;
      provider_metadata: any;
      createdAt: string;
      updatedAt: string;
    };
  };
};

type FormatName = "thumbnail" | "large" | "small" | "medium" | "xlarge";

type Formats = {
  thumbnail: Thumbnail;
  large: Thumbnail;
  small: Thumbnail;
  medium: Thumbnail;
  xlarge: Thumbnail;
};

type Thumbnail = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
};

interface Window {
  dataLayer: { [key: string]: string | null | undefined | {} }[];
}

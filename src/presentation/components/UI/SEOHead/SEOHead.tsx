import React, { useEffect } from "react";

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  price: number;
  currency: string;
  availability: string;
}

interface SEOHeadProps {
  seoData: SEOData;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ seoData }) => {
  useEffect(() => {
    document.title = seoData.title;

    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updateOGTag = (property: string, content: string) => {
      let meta = document.querySelector(
        `meta[property="${property}"]`
      ) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMetaTag("description", seoData.description);
    updateMetaTag("keywords", seoData.keywords.join(", "));

    updateOGTag("og:title", seoData.title);
    updateOGTag("og:description", seoData.description);
    updateOGTag("og:type", "product");

    if (seoData.image) {
      updateOGTag("og:image", seoData.image);
    }

    updateMetaTag("product:price:amount", seoData.price.toString());
    updateMetaTag("product:price:currency", seoData.currency);
    updateMetaTag("product:availability", seoData.availability);

    updateMetaTag("twitter:card", "product");
    updateMetaTag("twitter:title", seoData.title);
    updateMetaTag("twitter:description", seoData.description);

    if (seoData.image) {
      updateMetaTag("twitter:image", seoData.image);
    }
  }, [seoData]);

  return null;
};

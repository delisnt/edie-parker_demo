export interface BaseProduct {
  title: string;
  inStock: boolean;
  price: number;
  salePrice?: number;
}
export interface ProductSummary extends BaseProduct {
  imageUrl: string;
  alternativeImageUrl?: string;
}
export interface ProductDetails extends BaseProduct {
  subtitle: string;
  imageGallery: string[];
  defaultColor: string;
  colors: string[];
  description: string;
  details: string[];
  relatedProducts: ProductSummary[];
}


export interface AccordionProps {
  details: string[];
}

export interface ProductDetailsProps {
  title: string,
  subtitle: string,
  description: string,
  price: number,
  onClick: MouseEvent,
  inStock: boolean;
}

export interface SuggestedProductProps  {
  title: string;
  price: number;
  imageUrl: string;
}
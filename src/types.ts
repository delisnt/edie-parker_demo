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

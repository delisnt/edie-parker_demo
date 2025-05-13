interface BaseProduct {
  title: string;
  inStock: boolean;
  price: number;
  salePrice?: number;
}
interface ProductSummary extends BaseProduct {
  imageUrl: string;
  alternativeImageUrl?: string;
}
interface ProductDetails extends BaseProduct {
  subtitle: string;
  imageGallery: string[];
  defaultColor: string;
  colors: string[];

  description: string;
  details: string[];
  relatedProducts: ProductSummary[];
}

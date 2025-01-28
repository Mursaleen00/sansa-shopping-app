// src/types/products/all-products.ts

// Review Import
import { Review } from './single-product';

// Export interface AllProductType
export interface AllProductType {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

// Export interface Product
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

// Export interface Dimensions
export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

// Export interface Dimensions
export interface Dimensions {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

// Export interface Meta
export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

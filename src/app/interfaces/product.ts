export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    rating: number;
    features: string[];
    inStock: boolean;
  }
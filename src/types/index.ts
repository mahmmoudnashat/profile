export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  tags: string[];
  rating: number;
  reviews: Review[];
  stock: number;
  ingredients?: string[];
  benefits?: string[];
  howToUse?: string;
  featured?: boolean;
  bestSeller?: boolean;
  isNew?: boolean;
  onSale?: boolean;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}
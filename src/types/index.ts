export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
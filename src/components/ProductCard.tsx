import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </Link>
        <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full hover:bg-white transition">
          <Heart className="h-5 w-5 text-rose-500" />
        </button>
      </div>
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg group-hover:text-rose-500 transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mt-1">{product.brand}</p>
        <div className="mt-2 flex items-center">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium">{product.rating}</span>
          <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-lg">¥{product.price.toLocaleString()}</span>
          <button 
            onClick={() => addItem(product)}
            className="bg-rose-500 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-600 transition"
          >
            カートに追加
          </button>
        </div>
      </div>
    </div>
  );
}
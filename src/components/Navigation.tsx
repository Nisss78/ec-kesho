import React from 'react';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

export function Navigation() {
  const items = useCartStore(state => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-xl font-semibold">BeautyStation</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-600 hover:text-gray-900">商品を探す</Link>
            <Link to="/facilities" className="text-gray-600 hover:text-gray-900">施設を探す</Link>
            <Link to="/reviews" className="text-gray-600 hover:text-gray-900">レビュー</Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition">
              ログイン
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
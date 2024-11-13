import React from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const addItem = useCartStore(state => state.addItem);

  if (!product) {
    return <div className="min-h-screen pt-24 px-4">商品が見つかりません</div>;
  }

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-xl text-gray-600 mt-2">{product.brand}</p>
            
            <div className="flex items-center mt-4">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 font-medium">{product.rating}</span>
              <span className="ml-1 text-gray-500">({product.reviews}件のレビュー)</span>
            </div>

            <p className="mt-6 text-gray-700">{product.description}</p>

            <div className="mt-8">
              <p className="text-3xl font-bold">¥{product.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-1">税込・送料無料</p>
            </div>

            <button 
              onClick={() => addItem(product)}
              className="w-full bg-rose-500 text-white py-3 rounded-full mt-8 hover:bg-rose-600 transition"
            >
              カートに追加
            </button>

            <div className="mt-8 space-y-4">
              <div className="border-t pt-4">
                <h3 className="font-semibold">商品詳細</h3>
                <p className="mt-2 text-gray-600">
                  {product.description}
                </p>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-semibold">配送について</h3>
                <p className="mt-2 text-gray-600">
                  全国送料無料。通常1-3営業日以内に発送いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
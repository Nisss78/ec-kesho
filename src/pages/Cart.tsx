import React from 'react';
import { Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router-dom';

export function Cart() {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900">カートは空です</h1>
          <Link 
            to="/products"
            className="mt-4 inline-block bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition"
          >
            商品を探す
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">ショッピングカート</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.brand}</p>
                  <p className="font-bold mt-1">¥{product.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={quantity}
                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                    className="rounded border p-1"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="p-2 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-lg font-semibold mb-4">注文内容</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>小計</span>
                <span>¥{total().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>送料</span>
                <span>¥0</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>合計</span>
                  <span>¥{total().toLocaleString()}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-rose-500 text-white py-3 rounded-full mt-6 hover:bg-rose-600 transition">
              レジに進む
            </button>
            <Link 
              to="/products"
              className="w-full block text-center text-rose-500 mt-4 hover:text-rose-600"
            >
              買い物を続ける
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
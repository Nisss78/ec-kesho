import React from 'react';
import { MapPin, Star, UserCheck, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                駅で試して、
                <br />
                自分に合う化粧品を
                <br />
                見つけよう
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                駅の化粧室で実際に試せる。あなたの肌質に合った商品をAIがパーソナライズ推奨。
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/products"
                  className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition flex items-center justify-center"
                >
                  商品を探す
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/facilities"
                  className="bg-white text-rose-500 px-8 py-3 rounded-full border border-rose-500 hover:bg-rose-50 transition flex items-center justify-center"
                >
                  施設を探す
                  <MapPin className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" 
                alt="化粧品イメージ" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 font-semibold">4.9/5.0</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">10,000+ レビュー</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-rose-50 p-6 rounded-xl">
              <MapPin className="h-10 w-10 text-rose-500" />
              <h3 className="mt-4 text-xl font-semibold">駅で試せる</h3>
              <p className="mt-2 text-gray-600">
                全国の主要駅に設置された専用施設で、実際に商品を試すことができます。
              </p>
            </div>
            <div className="bg-rose-50 p-6 rounded-xl">
              <UserCheck className="h-10 w-10 text-rose-500" />
              <h3 className="mt-4 text-xl font-semibold">AIがおすすめ</h3>
              <p className="mt-2 text-gray-600">
                あなたの肌質や好みに合わせて、AIが最適な商品を提案します。
              </p>
            </div>
            <div className="bg-rose-50 p-6 rounded-xl">
              <Star className="h-10 w-10 text-rose-500" />
              <h3 className="mt-4 text-xl font-semibold">リアルな口コミ</h3>
              <p className="mt-2 text-gray-600">
                実際に試した人のリアルな評価とレビューを参考にできます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Products */}
      <div className="py-16 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">人気の商品</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
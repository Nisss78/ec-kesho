import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "モイスチャライジングクリーム",
    brand: "BeautyEssence",
    price: 3800,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviews: 420,
    description: "肌にやさしい保湿クリーム。24時間持続する潤いを実現します。",
  },
  {
    id: 2,
    name: "ブライトニングセラム",
    brand: "LuxGlow",
    price: 5600,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    reviews: 318,
    description: "ビタミンC配合の美容液。くすみのない透明感のある肌へ。",
  },
  {
    id: 3,
    name: "クレンジングオイル",
    brand: "PureClear",
    price: 2800,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    reviews: 562,
    description: "メイクも毛穴の汚れもすっきり落とす、肌にやさしいクレンジング。",
  },
  {
    id: 4,
    name: "UVプロテクター",
    brand: "SunShield",
    price: 3200,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    reviews: 245,
    description: "SPF50+、PA++++の高機能日焼け止め。化粧下地としても使えます。",
  },
];
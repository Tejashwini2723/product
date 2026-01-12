"use client";

import { Product } from "@/types/product";
import { toggleFavorite, getFavorites } from "@/lib/favorites";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const isFavorite = favorites.includes(product.id);

  return (
    <div   className="group relative flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-300"
      style={{
        border: "2px solid black", 
        borderRadius: "20px",        
      }}
     >
      <div className="flex justify-center items-center p-6">
        <img
          src={product.image}
          alt={product.title}  
          style={{ 
            width: "300px", 
            height: "300px", 
            padding: "30px" 
          }}
          className="w-52 h-52 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
 <div className="text-center">
    <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
      {product.title}
    </h3>
    <div style=
    {{
        marginLeft: 30
    }}>
      <p className="text-xl text-justify text-green-600 font-semibold mb-1">${product.price}</p>
      <p className="text-sm text-justify text-gray-500 uppercase tracking-wide">{product.category}</p>
    </div>
  </div>
      <div className="mt-auto flex gap-2 pt-4">
        <Link
          href={`/products/${product.id}`}
          className="mt-3 px-4 py-2 text-white rounded duration-200"
          style={{ 
            marginLeft: 20,
            marginBottom: 15, 
            color: "purple", 
            padding: "6px 12px" 
          }} 
        >
          View Product
        </Link>
        <button
          onClick={() => setFavorites(toggleFavorite(product.id))}
          className="ml-auto mb-4 mr-7 text-white text-2xl p-2 border-0 bg-transparent hover:text-red-500 transition-colors duration-200"
          aria-label="Toggle favorite" 
           style={{
                backgroundColor: "#1f2937", 
                color: "white",             
                padding: "6px 12px",        
                borderRadius: "8px",        
                textDecoration: "none",     
                marginRight: "30px",
                marginBottom: "15px",
                cursor: "pointer"
           }}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

    </div>
  );
}
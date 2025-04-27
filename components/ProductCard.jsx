"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import "./styles/productCard.css";
import Image from "next/image";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="product-image"
          priority={false}
          loading="lazy"
        />
      </div>
      <div className="product-details">
        <button className="like-button" onClick={toggleLike}>
          {liked ? <Heart fill="red" color="red" /> : <Heart />}
        </button>
        <h2 className="product-name">{product.title}</h2>
        <p className="signin-text">
          <a href="#" className="signin-link">
            Sign in
          </a>{" "}
          or Create an account to see pricing
        </p>
      </div>
    </div>
  );
}

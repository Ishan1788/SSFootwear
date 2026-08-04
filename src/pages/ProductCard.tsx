import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  hoverImage?: string;
  badge?: string;
}

export const ProductCard = ({ id, name, category, price, image, hoverImage, badge }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/products/${id}`} className="group block">
      <div
        className="relative bg-surface-container-low aspect-[4/5] mb-6 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {badge && (
          <div className="absolute top-4 left-4 z-20 font-technical text-label-technical uppercase border border-primary text-primary px-2 py-1 bg-surface">
            {badge}
          </div>
        )}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {hoverImage && (
          <img
            src={hoverImage}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        <button
          className="absolute top-4 right-4 z-20 text-on-surface-variant hover:text-primary transition-colors"
          aria-label="Add to wishlist"
          onClick={(e) => e.preventDefault()}
        >
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>
      <div className="flex justify-between items-start border-t border-border/20 pt-4">
        <div>
          <h4 className="font-heading text-headline-lg-mobile text-primary mb-1">{name}</h4>
          <p className="font-body text-body-md text-text-secondary">{category}</p>
        </div>
        <span className="font-technical text-label-technical text-primary">NPR {price.toLocaleString()}</span>
      </div>
    </Link>
  );
};
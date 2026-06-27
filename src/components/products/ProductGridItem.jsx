import { Heart, Star, StarHalf } from 'lucide-react';

export default function ProductGridItem({ product, isFavourite, toggleFavourite }) {
  // < .25 - round down to nearest whole (2.25 becomes 2.0)
  // > .25 & < .75 - round to nearest half (2.65 becomes 2.5)
  // > .75 - round up to nearest whole (2.85 becomes 3.0)

  const fullStars =
    (product.rating % 1).toFixed(2) < 0.25
      ? Math.trunc(product.rating)
      : (product.rating % 1).toFixed(2) > 0.75
        ? Math.ceil(product.rating)
        : Math.trunc(product.rating);

  const halfStar = (product.rating % 1).toFixed(2) > 0.25 && (product.rating % 1).toFixed(2) < 0.75;

  return (
    <div className="product-grid-item">
      <div className="product-image-container">
        <img src={product.thumbnail} alt={product.title} className="product-img" />
        <Heart
          className="favorite-icon"
          onClick={() => toggleFavourite(product)}
          color={isFavourite ? '#ef4444' : '#64748b'}
          fill={isFavourite ? '#ef4444' : 'white'}
        />
      </div>
      <div className="product-information">
        <p className="product-category">{product.category}</p>
        <p className="product-title">{product.title}</p>
        <div className="product-rating">
          <div className="stars">
            {Array.from({ length: fullStars }, () => (
              <Star fill="yellow" strokeWidth={0} size="16px" />
            ))}
            {halfStar ? <StarHalf fill="yellow" strokeWidth={0} size="16px" /> : ''}
          </div>
          <span className="number-of-reviews">({product.reviews.length})</span>
        </div>
        <p className="product-price">R{product.price}</p>
      </div>
    </div>
  );
}

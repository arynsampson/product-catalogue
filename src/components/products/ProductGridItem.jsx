export default function ProductGridItem({ product }) {
  return (
    <div className="product-grid-item">
      <div className="product-image-container">
        <img src={product.thumbnail} alt={product.title} className="product-img" />
      </div>
      <div className="product-information">
        <p className="product-title">{product.title}</p>
        <p className="product-price">R{product.price}</p>
        <p className="product-rating">Rating: {product.rating}</p>
      </div>
    </div>
  );
}

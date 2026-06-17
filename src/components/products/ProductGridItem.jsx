export default function ProductGridItem({ product, isFavourite, toggleFavourite }) {
  return (
    <div className="product-grid-item">
      <div className="product-image-container">
        <img src={product.thumbnail} alt={product.title} className="product-img" />
      </div>
      <div className="product-information">
        <p className="product-title">{product.title}</p>
        <p className="product-price">R{product.price}</p>
        <p className="product-rating">Rating: {product.rating}</p>
        <button className="" onClick={() => toggleFavourite(product)}>
          {isFavourite ? 'Unfavourite' : 'Favourite'}
        </button>
      </div>
    </div>
  );
}

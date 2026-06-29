import ProductGridItem from './ProductGridItem';

export default function ProductGrid({ visibleProducts, favouriteIds, toggleFavourite }) {
  if (!visibleProducts) {
    return (
      <div>
        <h3>No items found</h3>
      </div>
    );
  }

  return (
    <>
      <div className="product-grid">
        {visibleProducts?.map((product) => (
          <ProductGridItem
            key={product.id}
            product={product}
            isFavourite={favouriteIds.includes(product.id)}
            toggleFavourite={toggleFavourite}
          />
        ))}
      </div>
    </>
  );
}

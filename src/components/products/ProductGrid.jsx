import ProductGridItem from './ProductGridItem';

export default function ProductGrid({ products, favouriteIds, toggleFavourite }) {
  return (
    <>
      <div className="product-grid">
        {products?.map((product) => (
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

import ProductGridItem from './ProductGridItem';

export default function ProductGrid({ products }) {
  const productItems = products.map((product) => (
    <ProductGridItem key={product.id} product={product} />
  ));
  return (
    <>
      <div className="product-grid">{productItems}</div>
    </>
  );
}

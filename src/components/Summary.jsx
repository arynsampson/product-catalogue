export default function Summary({ productsSummary }) {
  return (
    <>
      <h3>Summary of products</h3>
      <p>Total number of products: {productsSummary.products}</p>
      <p>Total number of filtered products: {productsSummary.filteredProducts}</p>
      <p>Total number of favourited products: {productsSummary.favouriteProducts}</p>
      <hr />
    </>
  );
}

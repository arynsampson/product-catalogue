import SummaryItem from './SummaryItem';

export default function ProductsSummary({ productsSummary }) {
  return (
    <>
      <div className="products-summary-container">
        <SummaryItem />
        <SummaryItem />
        <SummaryItem />
      </div>
      {/* <h3>Summary of products</h3>
      <p>Total number of products: {productsSummary.products}</p>
      <p>Total number of filtered products: {productsSummary.filteredProducts}</p>
      <p>Total number of favourited products: {productsSummary.favouriteProducts}</p>
      <hr /> */}
    </>
  );
}

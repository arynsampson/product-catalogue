import SummaryItem from './SummaryItem';

export default function ProductsSummary({ productsSummary }) {
  return (
    <>
      <div className="products-summary-container">
        <SummaryItem
          summaryData={{
            icon: 'box',
            productsLength: productsSummary.products,
            title: 'Total products',
            subtext: 'All products in the catalogue',
          }}
        />
        <SummaryItem
          summaryData={{
            icon: 'funnel',
            productsLength: productsSummary.filteredProducts,
            title: 'Visible products',
            subtext: 'Based on current filters',
          }}
        />
        <SummaryItem
          summaryData={{
            icon: 'heart',
            productsLength: productsSummary.favouriteProducts,
            title: 'Favourites',
            subtext: 'Your favourite items',
          }}
        />
      </div>
    </>
  );
}

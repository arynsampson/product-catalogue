import FilterDropdown from '../components/FilterDropdown';
import ProductGrid from '../components/products/ProductGrid';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
import ProductsSummary from '../components/summary/ProductsSummary';

export default function Dashboard({
  products,
  productsSummary,
  searchInput,
  filter,
  categories,
  favouriteIds,
  toggleFavourite,
  setSearchInput,
  setFilter,
}) {
  const categoryItems = categories.map((category) => (
    <Category key={category} category={category} filter={filter} setFilter={setFilter}>
      {category}
    </Category>
  ));

  const numProductsDisplayCopy =
    products.length === 1
      ? `Showing ${products.length} product`
      : `Showing ${products.length} products`;

  return (
    <>
      <div className="dashboard-content">
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <div className="categories">{categoryItems}</div>
        <ProductsSummary productsSummary={productsSummary} />
        <p className="show-products-total">{numProductsDisplayCopy}</p>
        <ProductGrid
          products={products}
          favouriteIds={favouriteIds}
          toggleFavourite={toggleFavourite}
        />
      </div>
    </>
  );
}

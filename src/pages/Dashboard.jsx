import FilterDropdown from '../components/FilterDropdown';
import ProductGrid from '../components/products/ProductGrid';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
import ProductsSummary from '../components/summary/ProductsSummary';

export default function Dashboard({
  visibleProducts,
  productsSummary,
  favouriteIds,
  searchInput,
  filter,
  categories,
  toggleFavourite,
  showFavorites,
  setSearchInput,
  setFilter,
}) {
  const categoryItems = categories.map((category) => (
    <Category
      key={category}
      category={category}
      filter={filter}
      setFilter={setFilter}
      showFavorites={showFavorites}
    />
  ));

  const numProductsDisplayCopy =
    visibleProducts.length === 1
      ? `Showing ${visibleProducts.length} product`
      : `Showing ${visibleProducts.length} products`;

  return (
    <>
      <div className="dashboard-content">
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <div className="categories">{categoryItems}</div>
        <ProductsSummary productsSummary={productsSummary} />
        <p className="show-products-total">{numProductsDisplayCopy}</p>
        <ProductGrid
          visibleProducts={visibleProducts}
          favouriteIds={favouriteIds}
          toggleFavourite={toggleFavourite}
        />
      </div>
    </>
  );
}
